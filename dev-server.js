#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const { cleanupOrphanedFiles, createPidFile, removePidFile } = require('./cleanup-orphaned');

const MANIFEST_PATH = path.join(process.cwd(), 'manifest.json');

// Cleanup function to remove manifest and PID file
function cleanupManifest() {
    if (fs.existsSync(MANIFEST_PATH)) {
        try {
            fs.unlinkSync(MANIFEST_PATH);
            console.log('🗑️  Cleaned up temporary manifest.json');
        } catch (err) {
            console.warn('⚠️  Could not remove manifest.json:', err.message);
        }
    }
    removePidFile();
}

// Clean up any orphaned files from previous force-killed sessions
cleanupOrphanedFiles();

// Create PID file to track this process
createPidFile();

// Register cleanup handlers for all exit scenarios
process.on('exit', cleanupManifest);
process.on('SIGINT', () => {
    console.log('\n� Stopping server...');
    cleanupManifest();
    process.exit(0);
});
process.on('SIGTERM', () => {
    console.log('\n🛑 Server terminated...');
    cleanupManifest();
    process.exit(0);
});
process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught exception:', err.message);
    cleanupManifest();
    process.exit(1);
});

console.log('�🚀 Study Hub Development Server');
console.log('================================');
console.log('');

// Run build-manifest.js first
console.log('🔍 Building temporary study materials manifest...');
const buildProcess = spawn('node', ['build-manifest.js'], {
    stdio: 'inherit',
    cwd: process.cwd()
});

buildProcess.on('close', (code) => {
    if (code !== 0) {
        console.error('❌ Failed to build manifest');
        cleanupManifest();
        process.exit(1);
    }
    
    console.log('');
    console.log('🌐 Starting HTTP server on port 8080...');
    console.log('📖 Server URL: http://localhost:8080');
    console.log('⏹️  Press Ctrl+C to stop the server');
    console.log('💡 manifest.json will be cleaned up when server stops');
    console.log('');
    
    // Start http-server
    const serverProcess = spawn('npx', ['http-server', '.', '-p', '8080', '-o'], {
        stdio: 'inherit',
        cwd: process.cwd(),
        shell: true
    });
    
    serverProcess.on('close', (code) => {
        console.log(`\n🎯 Server stopped with code ${code}`);
        cleanupManifest();
        process.exit(code);
    });
});

buildProcess.on('error', (err) => {
    console.error('❌ Error running build script:', err.message);
    console.log('💡 Make sure you have Node.js installed');
    cleanupManifest();
    process.exit(1);
});