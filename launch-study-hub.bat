@echo off
title Study Hub - Development Server
color 0b

echo.
echo ===============================================
echo   🚀 Study Hub Development Server Launcher
echo ===============================================
echo.

cd /d "%~dp0"
echo 📁 Working Directory: %CD%
echo.

REM Check for Node.js and start development server
node --version >nul 2>&1
if %errorlevel% == 0 (
    echo ✅ Node.js found - Starting Study Hub Development Server...
    echo.
    node dev-server.js
    goto :end
)

REM Check for Python as fallback
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo ✅ Python found - Starting HTTP Server on port 8080...
    echo 🌐 Server URL: http://localhost:8080
    echo ⏹️  Press Ctrl+C to stop the server
    echo.
    timeout /t 2 >nul
    start http://localhost:8080
    python -m http.server 8080
    goto :end
)

REM Check for Python3 as fallback
python3 --version >nul 2>&1
if %errorlevel% == 0 (
    echo ✅ Python3 found - Starting HTTP Server on port 8080...
    echo 🌐 Server URL: http://localhost:8080
    echo ⏹️  Press Ctrl+C to stop the server
    echo.
    timeout /t 2 >nul
    start http://localhost:8080
    python3 -m http.server 8080
    goto :end
)

REM No server found - offer to open directly
echo ⚠️  No Node.js or Python found!
echo.
echo 📖 Options:
echo    1. Install Node.js: https://nodejs.org (Recommended)
echo    2. Install Python: https://python.org
echo    3. Open index.html directly in your browser
echo.
set /p choice="Would you like to open index.html directly? (y/n): "
if /i "%choice%"=="y" (
    if exist "index.html" (
        start index.html
        echo ✅ Opened index.html in default browser
    ) else (
        echo ❌ index.html not found in current directory
    )
)

:end
echo.
echo 🎯 Study Hub Development Server Launcher Complete!
pause