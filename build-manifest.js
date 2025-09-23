const fs = require('fs');
const path = require('path');

console.log('🔍 Building Study Hub manifest (temporary file)...');

function scanTopics(topicsPath) {
    const topics = {};
    
    if (!fs.existsSync(topicsPath)) {
        return topics;
    }
    
    try {
        const topicDirs = fs.readdirSync(topicsPath);
        
        for (const topicDir of topicDirs) {
            const topicPath = path.join(topicsPath, topicDir);
            const studyMaterialPath = path.join(topicPath, 'study-material.json');
            
            if (fs.statSync(topicPath).isDirectory() && fs.existsSync(studyMaterialPath)) {
                try {
                    const studyMaterial = JSON.parse(fs.readFileSync(studyMaterialPath, 'utf8'));
                    topics[topicDir] = {
                        title: studyMaterial.title || topicDir.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
                        ...studyMaterial
                    };
                    console.log(`  ✅ Found topic: ${topicDir}`);
                } catch (error) {
                    console.warn(`  ⚠️  Invalid JSON in ${topicDir}/study-material.json:`, error.message);
                }
            }
        }
    } catch (error) {
        console.warn(`  ⚠️  Could not scan topics directory: ${error.message}`);
    }
    
    return topics;
}

function scanStudyMaterials(studyMaterialsPath) {
    const materials = [];
    
    if (!fs.existsSync(studyMaterialsPath)) {
        return materials;
    }
    
    try {
        const files = fs.readdirSync(studyMaterialsPath);
        
        for (const file of files) {
            const filePath = path.join(studyMaterialsPath, file);
            const stats = fs.statSync(filePath);
            
            if (stats.isFile()) {
                const ext = path.extname(file).toLowerCase();
                let fileType = 'unknown';
                let icon = '📄';
                
                if (ext === '.pdf') {
                    fileType = 'pdf';
                    icon = '📖';
                } else if (ext === '.pptx' || ext === '.ppt') {
                    fileType = 'powerpoint';
                    icon = '📊';
                } else if (ext === '.docx' || ext === '.doc') {
                    fileType = 'word';
                    icon = '📝';
                } else if (ext === '.xlsx' || ext === '.xls') {
                    fileType = 'excel';
                    icon = '📊';
                } else if (ext === '.txt') {
                    fileType = 'text';
                    icon = '📄';
                } else if (['.jpg', '.jpeg', '.png', '.gif', '.bmp'].includes(ext)) {
                    fileType = 'image';
                    icon = '🖼️';
                } else if (['.mp4', '.avi', '.mov', '.wmv'].includes(ext)) {
                    fileType = 'video';
                    icon = '🎥';
                } else if (['.mp3', '.wav', '.m4a'].includes(ext)) {
                    fileType = 'audio';
                    icon = '🎵';
                }
                
                materials.push({
                    filename: file,
                    type: fileType,
                    icon: icon,
                    size: stats.size,
                    modified: stats.mtime.toISOString()
                });
                
                console.log(`  ✅ Found material: ${icon} ${file}`);
            }
        }
    } catch (error) {
        console.warn(`  ⚠️  Could not scan study materials directory: ${error.message}`);
    }
    
    return materials;
}

function generateManifest() {
    const classesDir = './classes';
    const manifest = {
        generated: new Date().toISOString(),
        version: '1.0.0',
        classes: {}
    };
    
    if (!fs.existsSync(classesDir)) {
        console.error('❌ Classes directory not found!');
        process.exit(1);
    }
    
    try {
        const classDirs = fs.readdirSync(classesDir);
        
        console.log(`📁 Scanning ${classDirs.length} class directories...`);
        
        for (const classDir of classDirs) {
            const classPath = path.join(classesDir, classDir);
            
            if (fs.statSync(classPath).isDirectory()) {
                console.log(`\n📚 Processing class: ${classDir}`);
                
                const topicsPath = path.join(classPath, 'Topics');
                const studyMaterialsPath = path.join(classPath, 'Study Materials');
                
                const topics = scanTopics(topicsPath);
                const studyMaterials = scanStudyMaterials(studyMaterialsPath);
                
                manifest.classes[classDir] = {
                    title: classDir.replace(/-/g, ' ').replace(/&/g, '&').replace(/\b\w/g, c => c.toUpperCase()),
                    slug: classDir,
                    topics: topics,
                    studyMaterials: studyMaterials,
                    topicCount: Object.keys(topics).length,
                    materialCount: studyMaterials.length
                };
                
                console.log(`  📊 Topics: ${Object.keys(topics).length}, Materials: ${studyMaterials.length}`);
            }
        }
        
        // Write manifest.json
        const manifestPath = './manifest.json';
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
        
        console.log(`\n✅ Manifest generated successfully!`);
        console.log(`📍 Location: ${path.resolve(manifestPath)}`);
        console.log(`📊 Summary: ${Object.keys(manifest.classes).length} classes discovered`);
        
        // Print summary
        console.log('\n📋 Class Summary:');
        for (const [classKey, classData] of Object.entries(manifest.classes)) {
            console.log(`  • ${classData.title}: ${classData.topicCount} topics, ${classData.materialCount} materials`);
        }
        
    } catch (error) {
        console.error('❌ Error generating manifest:', error.message);
        process.exit(1);
    }
}

// Run the manifest generation
generateManifest();