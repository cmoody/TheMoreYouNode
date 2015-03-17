#!/usr/bin/env node

// console.log(process.argv[2]);
// add in for localeur -h
var params = process.argv[2];

// console.log("Hello World!");

var http = require('http');

//   port: 8080,
if(params === '-h') {
	var options = {
	  host: 'sxsw2015.localeur.com',
	  path: '/api/tags'
	};
}else{
	var options = {
	  host: 'sxsw2015.localeur.com',
	  path: '/api/' + params
	};
}

callback = function(response) {
  var str = '';

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    // console.log(str);
    var jsData = JSON.parse(str);
    for(var i = 0;i < jsData.length; i++) {
    	console.log(jsData[i].address);
    }
  });
}

http.request(options, callback).end();















