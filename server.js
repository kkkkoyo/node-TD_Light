'use strict';
var osc = require('./node_modules/node-osc/lib');
var exec = require('child_process').exec;
var child;

var oscServer = new osc.Server(1880, '192.168.0.7');
oscServer.on("message", function (msg) {
  

    //console.log(msg[3][1]);
    var under = 0.95;
    var over = 1.05;
    var overs = [1.2,1.4,1.6,1.7];
    var unders = [0.2,0.4,0.6,0.7]
    var num = parseFloat(msg[3][1]);
    var switchNo = 8;
    if(under<num&&num<over){
//      console.log("off"); 
    }
    if(overs[3]<num){
      switchNo = 0;
    }else if(overs[2]<num){
      switchNo = 1;
    }else if(overs[1]<num){
      switchNo = 2;
    }else if(overs[0]<num){
      switchNo = 3;
    }else if(unders[3]<num){
      switchNo = 4;
    }
    else if(unders[2]<num){
      switchNo = 5;
    }
    else if(unders[1]<num){
      switchNo = 6;
    }else if(unders[0]<num){ 
      switchNo = 7;
    }

    child = exec("python lcd.py "+switchNo,function(error,stdout,stderr){                                                
      console.log('stdout:' + stdout);
      console.log('stderr:' + stderr);
    });
});
