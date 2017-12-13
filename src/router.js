function route(handle, pathname, res) {
    if (typeof handle[pathname] === "function") {
        handle[pathname]();
    } else {
        console.log("No request handler for" + pathname);
        res.writeHead(404, {"ContentType": "text/plain"});
        res.write("404 not fount");
        res.end();
    }
}

exports.route = route;