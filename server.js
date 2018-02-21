'use strict';
var osc = require('./node_modules/node-osc/lib');

var oscServer = new osc.Server(1880, '192.168.0.7');
oscServer.on("message", function (msg) {
    console.log('Message:');
    console.log(msg);
});
