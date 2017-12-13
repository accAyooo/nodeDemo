var http = require("http");
var url = require("url");

function start(route, handle) {
    http.createServer(function(req, res) {
        var pathName = url.parse(req.url).pathname;
        console.log(pathName);

        route(handle, pathName, res);
    }).listen(8888);
}

exports.start = start;