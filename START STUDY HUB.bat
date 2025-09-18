@echo off
:: Study Hub Quick Launcher - Desktop Version

:: Get the directory where this batch file is located (should be Study-Hub on desktop)
set "STUDY_DIR=%~dp0"

:: Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo Node.js is not installed. Please install it from https://nodejs.org/
    pause
    exit /b 1
)

:: Change to study directory  
cd /d "%STUDY_DIR%"

:: Start server silently in background
start /b "" node server.js

:: Wait for server to start
timeout /t 3 /nobreak >nul

:: Open browser
start chrome http://localhost:3000 2>nul || start http://localhost:3000

:: Show brief success message
echo Study Hub started! Opening http://localhost:3000
echo Close any command prompt windows to stop the server.
timeout /t 3 /nobreak >nul

:: Exit this window
exit