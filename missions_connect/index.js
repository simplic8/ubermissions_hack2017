var express = require('express');
var bodyParser = require('body-parser');
var agency = require('./routes/agency.js');
var trip = require('./routes/trip.js');
var app = express();

var allowCrossDomain = function(req, res, next) { 
	res.header('Access-Control-Allow-Origin', '*'); 
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'); 
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	next();
};

app.enable('trust proxy');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(allowCrossDomain);
app.use('/agencies',agency);
app.use('/trips',trip);
//app.get('/', function(req,res,next){res.sendStatus(200);next();});

app.listen(4000,'');
console.log('Missions Connect Server running at http://127.0.0.1:' + 4000 + '/ PID:' + process.pid);
