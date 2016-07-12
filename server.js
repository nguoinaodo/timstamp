var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello world'); 
});

app.listen(8080, function() {
    console.log('App is listening at https://timestamp-microservice-nguoinaodo.c9users.io'); 
});