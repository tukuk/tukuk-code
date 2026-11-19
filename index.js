const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    service: 'tukuk-code',
    status: 'online',
    hostname: 'code.tukuk.org',
    timestamp: new Date().toISOString()
  }));
});

server.listen(PORT, () => {
  console.log(`tukuk-code running on port ${PORT}`);
});

module.exports = server;