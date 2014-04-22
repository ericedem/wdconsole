module.exports.configure = configure;
module.exports.dump = dump;

var fs = require('fs');

function configure () {
	return fs.readFileSync('./config.js', 'utf8');
}

function dump () {
	return 'return window.WDCONSOLE.consoleLog;';
}