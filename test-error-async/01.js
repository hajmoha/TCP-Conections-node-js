

var http = require('http');

// شمارنده محلی
http.createServer(function (req, res) {
  let counter = 1; // تعریف محلی
  let result = '';

  for (let i = 0; i < 100; i++) {
    result += counter++ + '\n';
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(result);
}).listen(8124);

console.log('Server running on http://localhost:8124/');