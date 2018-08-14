var express = require('express');
var app = express();
app.use(express.static('assets'));
var fs = require('fs');
var bodyParser = require('body-parser');
var stringifyFile = '';

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile("/index.html");
});

app.get('/userform', function(req, res) {
	const response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	res.end(JSON.stringify(response));
});

var server = app.listen(3000, 'localhost', function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});