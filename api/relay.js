const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com');

var state = 'true';

client.on('connect', () => {
    client.publish('mail2605/connected', 'true');
    sendStateUpdate();
});

function sendStateUpdate() {
    console.log('sending state %s', state);
    client.publish('mail2605/state', state);
}