// //import the http module
// var http = require('http');

// //handle sending requests and returning responses
// function handleRequests(req,res){
// 	//return string
// 	res.end('Hello World!');
// }

// //create the server
// var server = http.createServer(handleRequests);

// //start server and listen in port x
// server.listen(8080, function(){
// 	console.log('Listening on port 8080');
// })


////////////////EXPRESS//////////////////
//require our dependencies
var express = require('express');
var app = express();
var port = 8080;

//route our app
var router = require('./app/routes');
app.use('/', router);

//start the server 
app.listen(port, function() {
	console.log('app started');
})


