const Particle = require('particle-api-js');
const particle = new Particle();
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com');
const token = '1cfa44ee31c23b8a47be328476a0a1fde985f04d';
const topicEntered = 'desk2812-mail2605/events/entered';
const topicLeft = 'desk2812-mail2605/events/left';

particle.getEventStream({name: 'Entered', auth: token}).then(function(stream) {
    stream.on('event', function(data) {
        console.log('Event: ', data);
        client.publish(topicEntered, data.data);
    });
});

particle.getEventStream({name: 'Left', auth: token}).then(function(stream) {
    stream.on('event', function(data) {
        console.log("Event: ", data);
        client.publish(topicLeft, data.data);
    });
});
