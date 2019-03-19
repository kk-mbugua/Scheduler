const http = require('http');
const WorkDays = require('./workdays');
const Shift = require('./shift')

const t = new Shift("peter", )
console.log(t.WorkDays)

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// }).listen(8080);