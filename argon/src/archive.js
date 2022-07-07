const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com');

var state = '';
var connected = false;

client.on('connect', () => {
    client.subscribe('mail2605/connected');
    client.subscribe('mail2605/state');
});

client.on('message', (topic, message) => {
    if(topic === 'mail2605/connected') {
        connected = (message.toString() === 'true');
    }
    if(topic === 'mail2605/state') {
        state = message.toString();
        console.log("state updated: %s", state);
    }
});