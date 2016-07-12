var express = require('express');
var router = require('./router');
var app = express();

app.use(express.static('public'));
app.use(router);

app.listen(app.get('port'), function() {
    console.log('App is running'); 
});