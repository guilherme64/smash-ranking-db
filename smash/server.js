var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;
var router = require('./routes/routes');
//var router = express.Router();


app.use('/api', router);
app.listen(port);

mongoose.connect('mongodb://dbuser:dbpassword1@ds141043.mlab.com:41043/smashdb', { useNewUrlParser: true });
console.log('this server works');