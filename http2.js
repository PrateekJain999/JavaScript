const http2 = require('http2');

// Create an unencrypted HTTP/2 server
const server = http2.createServer();

server.on('stream', (stream, headers) => {
  stream.respond({
    ':status': 200
  });
  stream.end('ello World');
});

server.listen(8000);