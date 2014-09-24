/* jslint node: true */
"use strict";

/*#############################################################
						Module dependancies:
##############################################################*/

var express = require('express'),
	http = require('http'), 
	path = require('path'),
	disposable = require('is-disposable-email')
	;

/*#############################################################
						Configure app:
##############################################################*/

var app = express();

app.configure(function(){
	app.use(express.urlencoded());
	app.use(express.compress());
	app.use(express.static(path.join(__dirname, 'public')));
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.set('port', 8888);
	app.set('env', 'dev');
	app.use(express.favicon(__dirname+'/public/img/favicon.ico'));

	app.use(app.router);
});

	var emailMessage = "";
	var	disposableEmailMessage = "N'utilisez pas d'email jetable, vaurien !";
	var okEmailMessage = "Votre email n'est pas jetable, bravo !";
	var noEMail = "Entre un email si tu le veux bien.";

app.get('/', function (req, res) {
	res.render('index', {emailMessage:  emailMessage});
});

app.post('/', function (req, res) {
	
	var email = req.body.email;
	
	//Check if the input is empty
	if(!email)
	{
		console.log('[KO] no email entered.');
		emailMessage = noEMail;
	}
	
	//Check if the email is disposable
	else if(email && disposable(email))
	{
		console.log('[KO] ' + email + ' is disposable.');
		emailMessage = disposableEmailMessage;
	}
	
	//Email is ok
	else 
	{
		console.log('[OK] ' + email + ' is not disposable.');
		emailMessage = okEmailMessage;
	}
		res.render('index', {emailMessage:  emailMessage});
});


/*#############################################################
						Launch server:
##############################################################*/

http.createServer(app).listen(process.env.PORT, function(){
	console.log("Express server listening on port " + app.get('port'));
	console.log('Environment: ' + app.get('env'));
});