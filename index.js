var http = require("http");

var server = http.createServer(function(request,response)
{
    console.log(request);
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello");
    response.end();
});

server.listen(8888);
