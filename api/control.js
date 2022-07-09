const axios = require('axios');
const Particle = require('particle-api-js');
const particle = new Particle();
const device = 'e00fce68afe7a9c5c32421cf';
const token = '1cfa44ee31c23b8a47be328476a0a1fde985f04d';

var res = particle.callFunction({ deviceId: device, name: 'toggle', auth: token });

res.then(
    function(data) {
      console.log('Function called successfully:', data);
    }, function(err) {
      console.log('An error occurred:', err);
    });