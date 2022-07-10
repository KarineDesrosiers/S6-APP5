const Particle = require('particle-api-js');
const device = 'e00fce68afe7a9c5c32421cf';
const token = '1cfa44ee31c23b8a47be328476a0a1fde985f04d';

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());

app.post('/api/led', function(req, res) {
    const particle = new Particle();

    res = particle.callFunction({ deviceId: device, name: 'toggle', auth: token });
    res.then(
        function(data) {
            console.log('Function called successfully:', data);
            return res.sendStatus(200);
        }, function(err) {
            console.log('An error occurred:', err);
            return res.sendStatus(500);
        });
});

app.listen(port, () => {
    console.log('Control server started!')
});
