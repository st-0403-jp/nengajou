/*serverS.js*/
var fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var httpd = require('https').createServer(options, function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello World');
}).listen(8443);
