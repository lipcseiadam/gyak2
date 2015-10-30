var express = require('express');
var app = express();

//Minden útvonalra lefut
app.use(function (req, res, next) {
    console.log('Middleware');
    next();
});

//Minden '/users' résszel kezdődő útvonalra lefut
app.use('/users', function (req, res, next) { /*...*/ });

//Példa végpont
app.use(function (req, res, next) {
    console.log('Végpont');
});

app.get('/', function(req, res){
    res.writeHead(200, {'Content-type' : 'text/plain'});
    res.end('Hello World (EX)');
    console.log('Keres érkezett(EX)'); 
});

var port = process.env.PORT;
var host = process.env.IP;

var server = app.listen(port, host, function(){console.log('asd')});