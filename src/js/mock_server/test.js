http = require('http');
url = require('url');

var host = '127.0.0.1'
var port = 23456;

var cors = require('cors')
var express = require('express')

var app = express()
app.use(cors())

var session = require('express-session');

var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '50mb'})); // support json encoded bodies
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // support encoded bodies
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
}));

app.listen(port,(err) => {
	if (err) {
		return console.log('bad');
	}
})
