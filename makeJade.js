var jade = require('jade'),
    fs = require('fs'),
    express = require('express');

var app = express();
app.get('/', function(req, res) {
	jade.renderFile('index.jade', function(error, html) {
		res.send(html);
	});
});

var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port;
});
