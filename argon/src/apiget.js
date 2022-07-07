const axios = require('axios');

axios
    .get('https://api.particle.io/v1/devices/e00fce68afe7a9c5c32421cf/value?access_token=3cd95b753fa4736ae9369402f5a302053061d2ed')
    .then(res => {
        console.log('statusCode: ${res.status}');
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });