/*
 * Copyright (c) 2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */
function captureConsoleMessages() {

    try {
        if (console) {
            //Making sure we dont redefine console methods
            if (!console.oldLog) {

                //capturing console log
                console.oldLog = console.log;
                console.log = function (line) {
                    WDCONSOLE.consoleLog += "[LOG] " + line + "\n";
                    console.oldLog(line);
                };

                //capturing console info
                console.oldInfo = console.info;
                console.info = function (line) {
                    WDCONSOLE.consoleLog += "[INFO] " + line + "\n";
                    console.oldInfo(line);
                };

                //capturing console warn
                console.oldWarn = console.warn;
                console.warn = function (line) {
                    WDCONSOLE.consoleLog += "[WARN] " + line + "\n";
                    console.oldWarn(line);
                };

                //capturing console debug
                console.oldDebug = console.debug;
                console.debug = function (line) {
                    WDCONSOLE.consoleLog += "[DEBUG] " + line + "\n";
                    console.oldDebug(line);
                };

                //capturing console debug
                console.oldError = console.error;
                console.error = function (line) {
                    WDCONSOLE.consoleLog += "[ERROR] " + line + "\n";
                    console.oldError(line);
                };
            }
        }
    } catch (e) {

    }
}

if (window.WDCONSOLE === undefined) {
	window.WDCONSOLE = {};
	window.WDCONSOLE.consoleLog = '';
	captureConsoleMessages();
}
