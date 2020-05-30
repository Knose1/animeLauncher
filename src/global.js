let tabCount = 0;
let group = console.group;
let groupEnd = console.groupEnd;


let log = console.log;

let lastStringLog = null;
let lastStringLogCount = 0;
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
		}
		else 
		{
			process.stdout.moveCursor(0,-1);
			process.stdout.clearLine();
			process.stdout.cursorTo(0);
			process.stdout.write(message + ` (${++lastStringLogCount})` + "\n");
		}

		return
	}
	else lastStringLog = null;

	let args = [message];
	args.push.apply(args, optionalParams);

	log.apply(console, args);
}

const path = require("path");

//*//////////////////////////////*//
//*       Global variables       *//
//*//////////////////////////////*//

/**
 * @example nameof({myVar}); //return "myVar"
 * @param {Object} varObject 
 */
function nameof(varObject) {
    return Object.keys(varObject)[0];
}
global.nameof = nameof;

/**
 * The folder of the node.js projet
 * @global
 * @type {string}
 */
var __root = path.resolve(__dirname, "../");//we are in /src so we must go up to real root
global.__root = __root;

/**
 * The temp folder of the node.js projet
 * @global
 * @type {string}
 */
var __tempFolder = path.join(__root, '_temp');
global.__tempFolder = __tempFolder;

console.newLine = function() {console.log("\n\r")};
//*//////////////////////////////*//