const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com');
const topicEntered = 'desk2812-mail2605/events/entered';
const topicLeft = 'desk2812-mail2605/events/left';
const fs = require('fs');

client.on('connect', () => {
    eraseContentFile();
    client.subscribe(topicEntered);
    client.subscribe(topicLeft);
});

client.on('message', (topic, message) => {
    if(topic === topicEntered) {
        writeContentFile('Entered: ' + message.toString() + '\n\r');
    }
    if(topic === topicLeft) {
        writeContentFile('Left: ' + message.toString() + '\n\r');
    }
});

function writeContentFile(content) {
    fs.appendFile('database.txt', content, err => {
        if(err) {
            console.log('Error: ', err);
        }
        console.log('File written successfully!');
    });
}

function eraseContentFile() {
    fs.writeFile('database.txt', '', err => {
        if(err) {
            console.log('Error: ', err);
        }
        console.log('File emptied successfully!');
    });
}
