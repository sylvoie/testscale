// ======================================================
// SETUP
// ======================================================

const express = require('express');
const app = express();

var server_port = process.env.HELLOWORLD_PORT_8080_TCP_PORT || 8080;
var server_ip_address = process.env.HELLOWORLD_PORT_8080_TCP_ADDR || '127.0.0.1';

// ======================================================
// ROUTES
// ======================================================

app.get('/', function(req, res) {
   var pid = process.pid;
   var plateforme = process.platform;
   var hostname = process.env.HOSTNAME;
   res.send('Hello world sur from hostname : ' + hostname + ' PID ' + pid + ' plateforme ' + plateforme);
});

app.listen(server_port, function () {
  console.log( "Listening on port " + server_port )
});
