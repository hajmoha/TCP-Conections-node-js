var http = require('http');

// شمارنده سراسری
let counter = 1; // تعریف به صورت global

http.createServer(function (req, res) {
  let result = '';

  for (let i = 0; i < 100; i++) {
    result += counter++ + '\n'; // شمارنده بین درخواست‌ها مشترک است
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(result);
}).listen(8125);

console.log('Server running on http://localhost:8125/');