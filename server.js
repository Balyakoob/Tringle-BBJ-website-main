// Simple HTTP server for serving the Triangle BJJ website
// This server uses only built‑in Node.js modules so no external
// dependencies are required. It serves files from the
// current directory (`triangle_bjj_site`) and falls back to
// `index.html` for the root path.

const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
// Base directory where our static files live
const baseDir = __dirname;

// Basic MIME type mapping
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  let reqPath = req.url;
  // Prevent directory traversal attacks
  reqPath = decodeURIComponent(reqPath.replace(/\.\.+/g, ''));
  // Default to index.html for root
  let filePath = path.join(baseDir, reqPath === '/' ? 'index.html' : reqPath);

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      // If directory is requested, serve index.html inside it
      filePath = path.join(filePath, 'index.html');
    }
    fs.readFile(filePath, (error, data) => {
      if (error) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
      }
      const ext = path.extname(filePath).toLowerCase();
      const mimeType = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
    });
  });
});

server.listen(port, () => {
  console.log(`Triangle BJJ server running at http://localhost:${port}`);
});