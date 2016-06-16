var http = require('http'),
    httpProxy = require('http-proxy');
var config=require('./config.js');
var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function(req, res) {
  var headers=req.headers;
  var viewhost=headers.host;
  var target=config.host(viewhost);
  proxy.web(req, res, { target:target});
});
server.listen(80);
