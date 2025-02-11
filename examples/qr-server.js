import http from 'node:http';
import url from 'node:url';
import qr from '../lib/qr.js';

http.createServer(function (req, res) {
    var text = url.parse(req.url, true).query.text;
    try {
        var img = qr.image(text);
        res.writeHead(200, {'Content-Type': 'image/png'});
        img.pipe(res);
    } catch (e) {
        res.writeHead(414, {'Content-Type': 'text/html'});
        res.end('<h1>414 Request-URI Too Large</h1>');
    }
}).listen(5152);
