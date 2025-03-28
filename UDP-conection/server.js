

const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', function(msg, rinfo) {
    const receivedData = msg.toString().trim();
    console.log('Client send req: ' + receivedData);

    const upperCaseData = receivedData.toUpperCase();

  
    server.send(upperCaseData, rinfo.port, rinfo.address, function(err) {
        if (err) {
            console.log('Error sending data: ' + err);
        } else {
            console.log('Message sent to client');
        }
    });
});

const port = 8000;
server.bind(port, function() {
    console.log(`UDP server is running on port ${port}`);
});
