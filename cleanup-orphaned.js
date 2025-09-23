#!/usr/bin/env node
/**
 * Orphaned Process Cleanup Utility
 * 
 * This script checks for and cleans up files left by forcefully terminated processes.
 * It can be run standalone or integrated into the dev server.
 */

const fs = require('fs');
const path = require('path');

const MANIFEST_PATH = path.join(process.cwd(), 'manifest.json');
const PID_FILE = path.join(process.cwd(), '.dev-server.pid');

function isProcessRunning(pid) {
    try {
        // On Windows, sending signal 0 checks if process exists
        process.kill(pid, 0);
        return true;
    } catch (e) {
        return false;
    }
}

function cleanupOrphanedFiles() {
    console.log('🔍 Checking for orphaned files from force-killed processes...');
    
    // Check if PID file exists
    if (fs.existsSync(PID_FILE)) {
        try {
            const oldPid = parseInt(fs.readFileSync(PID_FILE, 'utf8').trim());
            
            if (!isProcessRunning(oldPid)) {
                console.log(`🧹 Found orphaned PID file (process ${oldPid} is dead) - cleaning up...`);
                
                // Remove PID file
                fs.unlinkSync(PID_FILE);
                
                // Remove manifest if it exists
                if (fs.existsSync(MANIFEST_PATH)) {
                    fs.unlinkSync(MANIFEST_PATH);
                    console.log('🗑️  Removed orphaned manifest.json');
                }
                
                console.log('✅ Cleanup completed');
            } else {
                console.log(`ℹ️  Process ${oldPid} is still running - no cleanup needed`);
            }
        } catch (err) {
            console.warn('⚠️  Error during orphan cleanup:', err.message);
            // If we can't read PID file, assume it's corrupted and clean up
            if (fs.existsSync(PID_FILE)) fs.unlinkSync(PID_FILE);
            if (fs.existsSync(MANIFEST_PATH)) fs.unlinkSync(MANIFEST_PATH);
        }
    } else if (fs.existsSync(MANIFEST_PATH)) {
        // Manifest exists but no PID file - likely from old version or crash
        console.log('🧹 Found orphaned manifest.json without PID file - cleaning up...');
        fs.unlinkSync(MANIFEST_PATH);
        console.log('🗑️  Removed orphaned manifest.json');
    } else {
        console.log('✨ No orphaned files found');
    }
}

function createPidFile() {
    fs.writeFileSync(PID_FILE, process.pid.toString());
}

function removePidFile() {
    if (fs.existsSync(PID_FILE)) {
        try {
            fs.unlinkSync(PID_FILE);
        } catch (err) {
            console.warn('⚠️  Could not remove PID file:', err.message);
        }
    }
}

// If run directly, just do cleanup
if (require.main === module) {
    cleanupOrphanedFiles();
} else {
    // If imported, export functions
    module.exports = {
        cleanupOrphanedFiles,
        createPidFile,
        removePidFile,
        PID_FILE,
        MANIFEST_PATH
    };
}