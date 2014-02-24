var http = require('http');
function start()
{
    var server = http.createServer(
        
        function(req, res) {
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.write("Hello");
            res.end(); 
        });
}

exports.start = start;