var net = require('net');
var server = net.createServer();

server.on('connection', function(client)
{
    client.write('hi');
    client.write('connected');
    client.end();    
});

server.listen(9090);