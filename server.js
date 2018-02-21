'use strict';
var osc = require('./node_modules/node-osc/lib');

var oscServer = new osc.Server(1880, '192.168.0.0');
oscServer.on('oscout2/chan1', function (msg) {
    console.log('Message:');
    console.log(msg);
});
