
const dgram = require('dgram');

const client = dgram.createSocket('udp4');

client.send('connected client!', 0, 'connected client!'.length, 8000, 'localhost', function(err) {
    if (err) {
        console.log('Error sending data: ' + err);
    } else {
        console.log('Message sent to server');
    }
});

process.stdin.resume(); 

process.stdin.on('data', function(data) {
    const message = data.toString().trim();
    client.send(message, 0, message.length, 8000, 'localhost', function(err) {
        if (err) {
            console.log('Error sending data: ' + err);
        } else {
            console.log('Message sent to server');
        }
    });
});

client.on('message', function(msg, rinfo) {
    console.log('Received from server: ' + msg.toString().trim());
});


client.on('close', function() {
    console.log('Connection closed!');
    client.send('Connection closed by client!', 0, 'Connection closed by client!'.length, 8000, 'localhost');
});
