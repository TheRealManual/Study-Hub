@echo off
title Stop Study Hub Server
echo.
echo ========================================
echo       STOP STUDY HUB SERVER
echo ========================================
echo.

echo Searching for running Study Hub server...
echo.

:: Kill any node processes running server.js
for /f "tokens=2" %%i in ('tasklist /fi "imagename eq node.exe" /fo csv ^| findstr /i "server.js"') do (
    echo Found Study Hub server process: %%i
    taskkill /f /pid %%i >nul 2>&1
    if errorlevel 1 (
        echo ❌ Could not stop process %%i
    ) else (
        echo ✅ Stopped process %%i
    )
)

:: Alternative method - kill all node processes (more aggressive)
tasklist /fi "imagename eq node.exe" >nul 2>&1
if not errorlevel 1 (
    echo.
    echo Found Node.js processes. Stopping all Node.js processes...
    taskkill /f /im node.exe >nul 2>&1
    if errorlevel 1 (
        echo ❌ Could not stop Node.js processes
        echo You may need to run this as administrator
    ) else (
        echo ✅ All Node.js processes stopped
    )
) else (
    echo ℹ️  No Node.js processes found running
)

echo.
echo ✅ Study Hub server should now be stopped
echo You can now restart it using QUICK_START.bat or START_STUDY_HUB.bat
echo.
pause