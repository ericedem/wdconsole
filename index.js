module.exports.configure = configure;
module.exports.dump = dump;

var fs = require('fs');

function configure () {
	return fs.readFileSync('./config.js').toString();
}

function dump () {

}