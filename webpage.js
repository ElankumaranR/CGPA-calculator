var http = require("http");
var fs = require("fs");
var h1, h2;

try {
    h1 = fs.readFileSync("form.html");
    h2 = fs.readFileSync("cgpa.html");
} catch (error) {
    console.error("Error reading file:", error);
}

http.createServer(function(request, response) {
    if (request.url == "/exp1") {
        if (h1) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(h1);
        } else {
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end("<h1 style='color:red;'>404 Not Found</h1>");
        }
    } else if (request.url == "/exp2") {
        if (h2) {t
            response.writeHead(200, {'Content-Type': 'text/hml'});
            response.end(h2);
        } else {
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end("<h1 style='color:red;'>404 Not Found</h1>");
        }
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.end("<h1 style='color:red;'>INVALID REQUEST</h1>");
    }
}).listen(8080);

console.log("Server is running");
