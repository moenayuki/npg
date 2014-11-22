var express = require('express');
var routes = require('./routes/index.js');
var morgan = require('morgan');
var jade = require('jade');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('dev'));
app.set('views', './views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));
app.use(bodyParser.json);       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', routes.index);
app.post('/plain', routes.plain);

app.listen(3000, function () {
  console.log("TARGET CAPTURED ON #3000 ....");
});

module.exports = app;