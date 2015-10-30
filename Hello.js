console.log('Hello World');
var port = process.env.PORT;
var host = process.env.IP;

var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-type' : 'text/plain'});
    res.end('Hello World');
    console.log('Keres érkezett');
}).listen(port, host);