// ======Use require/import the HTTP module
var http = require("http");
// ====PORT WE NEED TO LISTEN TO
var PORT = 3000;

// =====FUNCTION HANDLES REQUEST ONE FOR EACH SERVER EX: REQUEST, RESPONSE
Function handleRequest(request, response) {
    response.end("it works! Path Hit:", request.url);
}
//  ======CREATES OUR SERVER
var server = http.createServer(handleRequest);

// ========CALL BACK TO TRIGER THE SERVER 
server.listen(PORT, function () {
    console.log("server listening on port: http://localhost:" + PORT);
});