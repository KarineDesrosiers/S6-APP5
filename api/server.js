var express = require('express');
var app = express();
var port = 3000;

// To handle cross-origin requests
var cors = require('cors');
app.use(cors());


// ------------ ARCHIVE ------------
app.get('/api/events', function(req, res) {
    res.send('[{"id":69, "name":"Somebody once told me"}]');
});

// ------------ CONTROL ------------
app.get('/api/led', function(req, res) {
    res.send('GET LED Status');
});

app.post('/api/led', function(req, res) {
    res.send('POST LED Status');
});


app.listen(port, () => {
    console.log('Server started!')
});