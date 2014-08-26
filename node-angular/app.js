/* jslint node: true */
"use strict";

/*#############################################################
						Module dependancies:
##############################################################*/

var express = require('express'),
	http = require('http'), 
	path = require('path');

/*#############################################################
						Configure app:
##############################################################*/

var app = express();

app.configure(function(){
	app.use(express.compress());
	app.use(express.static(path.join(__dirname, 'public')));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.set('port', 8888);
	app.set('env', 'dev');
	app.use(express.favicon(__dirname+'/public/img/favicon.ico'));

	app.use(app.router);
});

app.get('/', function (req, res) {
	res.render('index');
});

app.post('/', function (req, res) {
	// TO DO
});


/*#############################################################
						Launch server:
##############################################################*/

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
	console.log('Environment: ' + app.get('env'));
});