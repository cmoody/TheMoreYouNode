var os = require('os');
var fs = require('fs');

// console.log(os.platform());
// var myModule = {};

module.exports.renameFun = function(file, newName) {
	fs.rename(file, newName, function(err) {
		if(err) {
			console.log(err);
		}else{
			console.log("Success");
		}
	});
};

module.exports.hello = function() {
	console.log("Hello World");
};

// module.exports = myModule;