var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('le message que tu veux');
});

app.post('/', function(req, res) {
    res.send('tu peux mettre au pire POST');
});

app.listen(3000);