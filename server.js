var express = require('express');
var router = require('./router');
var app = express();

app.use(express.static('public'));
app.use(router);

app.listen(8080, function() {
    console.log('App is running at https://timestamp-microservice-nguoinaodo.c9users.io'); 
});