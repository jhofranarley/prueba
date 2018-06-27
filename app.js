var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var store = require('./routes/store');
var BigNumber = require('bignumber.js');
var app = express();
var session = require('express-session');

BigNumber.config({ ERRORS: false });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.Router());
app.use(cookieParser());
app.use(session({secret: 'ssshhhhh'}));

String.prototype.replaceAll = function (replaceThis, withThis) {
    try{
    var re = new RegExp(replaceThis,"g"); 
    return this.replace(re, withThis);
    }
    catch(e){
        console.log("El error (e): "+e+"\n re="+re);
    }
};
String.prototype.isNumeric = function(){
    return !isNaN(parseFloat(this)) && isFinite(this);
}
Array.prototype.clean = function() {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === "") {
            this.splice(i, 1);
        }
    }
    return this;
}

app.get('/', store.index);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}


// controlador de errores de producción
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
