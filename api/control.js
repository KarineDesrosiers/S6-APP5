const Particle = require('particle-api-js');
const device = 'e00fce68afe7a9c5c32421cf';
const token = '1cfa44ee31c23b8a47be328476a0a1fde985f04d';
const particle = new Particle();

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
app.use(cors());

app.get('/api/led', function(req, res) {
    const funcRes = particle.callFunction({ deviceId: device, name: 'toggle', auth: token });
    funcRes.then(
        function(data) {
            console.log(data.body?.return_value);
            res.json(data.body?.return_value);
        }, function(err) {
            console.log('An error occurred:', err);
        });
});

app.listen(port, () => {
    console.log('Control server started!')
});
