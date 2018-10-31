var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/** THIS SHOULD'T BE IN PRODUCTION */
app.use(cors());
var port = process.env.PORT || 8000;
var router = require('./routes/routes');
//var router = express.Router();


app.use('/api', router);

app.listen(port);

mongoose.connect('mongodb://dbuser:dbpassword1@ds141043.mlab.com:41043/smashdb', { useNewUrlParser: true });
console.log('this server works');