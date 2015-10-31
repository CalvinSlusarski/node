// var express = require('express');
// var app = express();
// 
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
// 
// var server = app.listen(3000, function () {
//   var host = server.address().address;
//   var port = server.address().port;
// 
//   console.log('Example app listening at http://%s:%s', host, port);
// });

var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>yac in code</h1>');
}).listen(process.env.PORT);