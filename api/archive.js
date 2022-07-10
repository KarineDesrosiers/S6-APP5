const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com');
const topicEntered = 'desk2812-mail2605/events/entered';
const topicLeft = 'desk2812-mail2605/events/left';
const fs = require('fs');
const file = 'database.txt';

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

client.on('connect', () => {
    eraseContentFile();
    client.subscribe(topicEntered);
    client.subscribe(topicLeft);
});

client.on('message', (topic, message) => {
    if(topic === topicEntered) {
        writeContentFile('Entered ' + message.toString());
    }
    if(topic === topicLeft) {
        writeContentFile('Left ' + message.toString());
    }
});

// https://nodejs.dev/learn/writing-files-with-nodejs
function writeContentFile(content) {
    fs.appendFile(file, content + '\n', err => {
        if (err) {
            console.log('Error appendFile(): ', err);
        }
        console.log('File written successfully!');
    });
}

function eraseContentFile() {
    fs.writeFile(file, '', err => {
        if (err) {
            console.log('Error writeFile(): ', err);
        }
        console.log('File emptied successfully!');
    });
}

// https://nodejs.dev/learn/reading-files-with-nodejs
app.get('/api/events', function(req, res) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.log('Error readFile(): ', err);
            return;
        }

        var rows = data.split('\n');
        var parsedData = [];
        for (let i = 0; i < rows.length-1; i++) {
            const element = rows[i].split(' ');
            parsedData[i] = {name: element[0], address: element[1]};
        }

        res.json(parsedData);
    });
});

app.listen(port, () => {
    console.log('Archive server started!');
});
