var express = require('express');
 var app = express();
 var qoutes = require('./qoutes.js');

   app.use(express.static('static'));
    app.get('/api/qoutes', function(req, res, next) {
     qoutes.getQuotesFromDB(function(err, qoutes) {
      if (err) return next(err);
       res.send(qoutes); 
     });
    });

    app.get('/api/qoute', function(req, res, next) {
     qoutes.getQuoteFromDB(function(err, qoute) {
      if (err) return next(err);
       res.send(qoute); 
     });
    });
    app.get('/');
     module.exports = app;