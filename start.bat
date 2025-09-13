@echo off
REM Windows batch file to start the Triangle BJJ Node.js server
REM Ensure that Node.js is installed and available on your PATH.
REM Change to the script directory
cd /d %~dp0
echo Starting Triangle BJJ server...
node server.js
pause