'use strict';

const fs = require('fs').promises;
const path = require('path');
const http = require('http');
const url = require('url');

function toTitleCase(str) {
  return String(str || '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase());
}

async function pathExists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function isDirectory(p) {
  try { const st = await fs.stat(p); return st.isDirectory(); } catch { return false; }
}

class StudyMaterialServer {
  constructor(classesPath = './classes', port = 3000) {
    this.classesPath = path.resolve(classesPath);
    this.port = port;
  }

  async readJSON(filePath) {
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw);
  }

  async loadAllStudyMaterials() {
    const studyData = {};
    try {
      const exists = await isDirectory(this.classesPath);
      if (!exists) return studyData;

      const classEntries = await fs.readdir(this.classesPath, { withFileTypes: true });
      for (const entry of classEntries) {
        if (!entry.isDirectory()) continue;
        const classKey = entry.name;
        const classPath = path.join(this.classesPath, classKey);

        const classData = { title: toTitleCase(classKey), topics: {} };

        // Topics folder (preferred layout)
        const topicsDir = path.join(classPath, 'Topics');
        const topicsDirExists = await isDirectory(topicsDir);

        if (topicsDirExists) {
          const topics = await fs.readdir(topicsDir, { withFileTypes: true });
          for (const t of topics) {
            if (!t.isDirectory()) continue;
            const topicKey = t.name;
            const topicPath = path.join(topicsDir, topicKey, 'study-material.json');
            if (await pathExists(topicPath)) {
              try {
                const data = await this.readJSON(topicPath);
                classData.topics[topicKey] = {
                  title: data.title || toTitleCase(topicKey),
                  notes: Array.isArray(data.notes) ? data.notes : [],
                  flashcards: Array.isArray(data.flashcards) ? data.flashcards : [],
                  quiz: Array.isArray(data.quiz) ? data.quiz : [],
                  games: Array.isArray(data.games) ? data.games : [],
                  sources: Array.isArray(data.sources) ? data.sources : [],
                  tags: Array.isArray(data.tags) ? data.tags : [],
                  id: data.id || topicKey,
                  last_updated: data.last_updated || new Date().toISOString().split('T')[0]
                };
              } catch (e) {
                console.warn(`Failed to parse ${topicPath}:`, e.message);
              }
            }
          }
        } else {
          // Fallback: legacy layout - look for immediate subfolders with study-material.json
          const subs = await fs.readdir(classPath, { withFileTypes: true });
          for (const t of subs) {
            if (!t.isDirectory()) continue;
            const topicKey = t.name;
            const topicPath = path.join(classPath, topicKey, 'study-material.json');
            if (await pathExists(topicPath)) {
              try {
                const data = await this.readJSON(topicPath);
                classData.topics[topicKey] = {
                  title: data.title || toTitleCase(topicKey),
                  notes: Array.isArray(data.notes) ? data.notes : [],
                  flashcards: Array.isArray(data.flashcards) ? data.flashcards : [],
                  quiz: Array.isArray(data.quiz) ? data.quiz : [],
                  games: Array.isArray(data.games) ? data.games : [],
                  sources: Array.isArray(data.sources) ? data.sources : [],
                  tags: Array.isArray(data.tags) ? data.tags : [],
                  id: data.id || topicKey,
                  last_updated: data.last_updated || new Date().toISOString().split('T')[0]
                };
              } catch (e) {
                console.warn(`Failed to parse ${topicPath}:`, e.message);
              }
            }
          }
        }

        if (Object.keys(classData.topics).length > 0) {
          studyData[classKey] = classData;
        }
      }
    } catch (err) {
      console.error('Error loading study materials:', err);
    }
    return studyData;
  }

  async startServer() {
    const server = http.createServer(async (req, res) => {
      // Parse URL and enable CORS
      const parsedUrl = url.parse(req.url, true);
      const pathname = parsedUrl.pathname;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }

      try {
        if (pathname === '/api/study-materials/files') {
          const result = {};
          const classEntries = await fs.readdir(this.classesPath, { withFileTypes: true });
          for (const entry of classEntries) {
            if (!entry.isDirectory()) continue;
            const className = entry.name;
            const smDir = path.join(this.classesPath, className, 'Study Materials');
            if (await isDirectory(smDir)) {
              try {
                const files = await fs.readdir(smDir);
                result[className] = files.filter(f => typeof f === 'string' && f.toLowerCase().endsWith('.pdf'));
              } catch {
                // ignore
              }
            }
          }
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify(result, null, 2));
        }

        if (pathname === '/api/study-materials') {
          const data = await this.loadAllStudyMaterials();
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify(data, null, 2));
        }

        
        // Serve static files from classes directory (e.g., PDFs)
        if (pathname.startsWith('/classes/')) {
          // Resolve requested path within classes root, prevent path traversal
          const reqPath = decodeURIComponent(pathname.replace(/^\/classes\//, ''));
          const resolved = path.resolve(path.join(this.classesPath, reqPath));
          if (!resolved.startsWith(this.classesPath)) {
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            return res.end('Forbidden');
          }
          try {
            const data = await fs.readFile(resolved);
            const ext = path.extname(resolved).toLowerCase();
            const types = {
              '.pdf': 'application/pdf',
              '.json': 'application/json',
              '.txt': 'text/plain'
            };
            res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
            return res.end(data);
          } catch (e) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 - File not found');
          }
        }
    

        if (pathname === '/' || pathname === '/index.html') {
          try {
            const indexPath = path.join(__dirname, 'index.html');
            const content = await fs.readFile(indexPath, 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(content);
          } catch {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 - File not found');
          }
        }

        // Default 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page not found');

      } catch (err) {
        console.error('Request error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal server error' }));
      }
    });

    server.listen(this.port, () => {
      console.log(`🚀 Study Hub server running at http://localhost:${this.port}`);
      console.log(`📚 Serving study materials from: ${this.classesPath}`);
    });

    return server;
  }
}

// Start server if run directly
if (require.main === module) {
  const server = new StudyMaterialServer('./classes', 3001);
  server.startServer().catch(console.error);
}

module.exports = StudyMaterialServer;
