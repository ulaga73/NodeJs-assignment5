var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if(req.url == "/"){
        res.write("Hello World!");
        res.end();
    }
    else if(req.url == "/welcome"){
        res.writeHead(200, {"Content-type": "text/plain"});
        res.write("Welcome to Dominos!");
        res.end();
    }
    else if(req.url == "/contact"){
        res.writeHead(200, {"Content-type": "application/json"});
        res.write(JSON.stringify({
            phone: '18602100000', 
  	        email: 'guestcaredominos@jublfood.com' 
        }));
        res.end();
    }
    else{
        res.writeHead(404, {"Content-type": "text/plain"});
        res.write("Page no found");
        res.end();
    }
}

httpServer.listen(8081, () => {console.log("Port 8081 is up")});

module.exports = httpServer;