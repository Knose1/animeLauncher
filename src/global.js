const CRLF = "\r\n";
const path = require("path");
const fs = require('fs');

let tabCount = 0;
let group = console.group;
let groupEnd = console.groupEnd;


let log = console.log;
let dir = console.dir;
let error = console.error;
let warn = console.warn;

let lastStringLog = null;
let lastStringLogCount = 0;

console.dir = (item, options) => 
{
	writeLog(JSON.stringify(item, null, 1));
	dir(item,options)
}

console.error = (message, ...optionalParams) =>
{
	writeLog("===ERROR===");
	writeLog(message);
	writeLog("===========");

	let args = [message];
	args.push.apply(args, optionalParams);

	error.apply(console, args);
}

console.warn = (message, ...optionalParams) =>
{
	writeLog("===Warn===");
	writeLog(message);
	writeLog("==========");

	let args = [message];
	args.push.apply(args, optionalParams);

	warn.apply(console, args);
}

console.log = (message, ...optionalParams) =>
{

	if (typeof(message) == "string" && !message.match(/%o/)) 
	{
		let matches = message.match(/(%d|%s)/g);
		for (let i = 0; matches !== null && i < matches.length && i < optionalParams.length; i++) {
			
			let str = null;
			switch (matches[i]) {
				case "%i":
				case "%d":
					str = parseInt(optionalParams.shift());
					break;

				case "%f":
					str = parseFloat(optionalParams.shift());
					break;

				case "%s":
					str = optionalParams.shift();
					break;

				/* Not included bro, sorry
				case "%o":
					try {
						str = JSON.stringify(optionalParams.shift());
					} catch (error) {
						str = null;
					}
					break;
				*/
				default:
					break;
			}

			message = message.replace(matches[i], str);
		}
		if (optionalParams.length > 0) message += " " + optionalParams.join(" ");
		
		if (lastStringLog !== message) 
		{
			lastStringLog = message
			lastStringLogCount = 0;
			process.stdout.write(message + "\n");
			writeLog(message);
		}
		else 
		{
			let m = message + ` (${++lastStringLogCount})`;
			process.stdout.cursorTo(0, process.stdout.columns);
			process.stdout.moveCursor(0,-1);
			process.stdout.clearLine();
			process.stdout.cursorTo(0);
			process.stdout.write(m + "\n");
			overrideLine(m);
		}

		return
	}
	else lastStringLog = null;

	if (typeof(message) === "object") 
	{
		writeLog(JSON.stringify(message, null, 1));
	}

	writeLog(message);
	let args = [message];
	args.push.apply(args, optionalParams);

	log.apply(console, args);
}


//*//////////////////////////////*//
//*       Global variables       *//
//*//////////////////////////////*//

/**
 * @example nameof({myVar}); //return "myVar"
 * @param {Object} varObject 
 * @memberof server.global
 */
function nameof(varObject) {
    return Object.keys(varObject)[0];
}
global.nameof = nameof;

/**
 * The folder of the node.js projet
 * @type {string}
 * @memberof server.global
 */
var __root = path.resolve(__dirname, "../");//we are in /src so we must go up to real root
global.__root = __root;

/**
 * The path to the logfile
 * @type {string}
 * @memberof server.global
 */
var __logFile = "";
global.__logFile = __logFile;

/**
 * The temp folder of the node.js projet
 * @type {string}
 * @memberof server.global
 */
var __tempFolder = path.join(__root, '_temp');
global.__tempFolder = __tempFolder;

let logText = "";

/**
 * Create a new log file (with an unique name) in the log folder
 * @memberof server
 */
function createLogFile() 
{
	let lLogFolder = path.join(__root, "log");
	if (!fs.existsSync(lLogFolder)) 
	{
		fs.mkdirSync(lLogFolder);
	}
	let lFileName = `${new Date(Date.now()).toISOString()}_Log.txt`;
	lFileName = toFileName(lFileName);
	__logFile = path.join(lLogFolder, lFileName);
	global.__logFile = __logFile;
	writeLog("============");
	writeLog(new Date(Date.now()).toString());
}
module.exports.createLogFile = createLogFile;

/**
 * Override last line in the logfile
 * @param {string} message 
 * @param {boolean} newLine 
 * @memberof server.global
 */
function overrideLine(message, newLine = true) {
	let line = logText.lastIndexOf(CRLF);
	
	if (line == -1) return writeLog(message,newLine);

	logText = logText.slice(0, line);

	let m = (newLine ? CRLF : "")+message;

	logText += m;

	fs.writeFileSync(__logFile, logText);
}
global.overrideLine = overrideLine;

/**
 * Write a line in the logfile
 * @param {string} message 
 * @param {boolean} newLine 
 * @memberof server.global
 */
function writeLog(message, newLine = true) {
	
	let m = (newLine && logText.length > 0 ? CRLF : "")+message;
	logText += m;
	fs.appendFileSync(__logFile, m);
}
global.writeLog = writeLog;

console.newLine = function() {console.log(CRLF)};
//*//////////////////////////////*//

/**
 * 
 * @param {string} fileName 
 * @param {string} replacer 
 * @memberof server.global
 */
function toFileName(fileName, replacer="-") 
{
	return fileName.replace(/\\|\/|:|\*|\?|"|\<|\>|\|/g, replacer)
}
global.toFileName = toFileName;