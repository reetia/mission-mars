const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  const { method, url } = req;
  if (url === '/' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from Node.js app!\n');
    return;
  }
  if (url === '/health' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('Not found\n');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
