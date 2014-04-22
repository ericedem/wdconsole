var assert = require('assert');
var fs = require('fs');

// setup
eval(fs.readFileSync(__dirname + '/../config.js', 'utf8'));

suite('test console logs');

test('debug', function () {
	console.debug('some things');

	assert.equal(window.WDCONSOLE.consoleLog, '[DEBUG] ' + 'some things' + '\n');

	window.WDCONSOLE.consoleLog = '';
});

test('info', function () {
	console.info('some things');

	assert.equal(window.WDCONSOLE.consoleLog, '[INFO] ' + 'some things' + '\n');

	window.WDCONSOLE.consoleLog = '';
});

test('warn', function () {
	console.warn('some things');

	assert.equal(window.WDCONSOLE.consoleLog, '[WARN] ' + 'some things' + '\n');

	window.WDCONSOLE.consoleLog = '';
});

test('error', function () {
	console.error('some things');

	assert.equal(window.WDCONSOLE.consoleLog, '[ERROR] ' + 'some things' + '\n');

	window.WDCONSOLE.consoleLog = '';
});

test('log', function () {
	console.log('some things');

	assert.equal(window.WDCONSOLE.consoleLog, '[LOG] ' + 'some things' + '\n');

	window.WDCONSOLE.consoleLog = '';
});