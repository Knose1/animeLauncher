const { waitForDebugger } = require('inspector');
try {
	waitForDebugger();
} catch (e) {}

const childProcess = require('child_process');
const path = require('path');
const url = require('url');
const { stdout } = require('process');

let args = process.argv.slice(2);
let jsdocArgs = [];

let projectPath = __dirname.slice(0, __dirname.indexOf(path.basename(__dirname)));
const CONFIGURE = "--configure";
const README = "--readme";
const LICENSE = "--license";
const PRIVATE = "--access all";
const VERBOSE = "--verbose";

if (args.length == 0)
{
	throw "usage : node _jsdocGenAndOpen/index.js [jsonConfig.json] [docIndex.html file] [LICENSE file] <pathToIndex.html>"
}
if (args.length >= 2) 
{
	jsdocArgs.push(CONFIGURE,args.shift()); //jsonConfig.json
}
if (args.length >= 2) 
{
	jsdocArgs.push(README,args.shift()); //docIndex.html file
}
if (args.length >= 2) 
{
	jsdocArgs.push(LICENSE,args.shift()); //LICENSE file
}
if (args.length >= 2) 
{
	args = [path.join("../",args.join(" "))];
}

jsdocArgs.push(PRIVATE);
jsdocArgs.push(VERBOSE);

let jsdocExecute = `jsdoc ${jsdocArgs.join(" ")}`;

console.log(`${projectPath}> ${jsdocExecute}`);
const jsdocCommand = childProcess.exec(jsdocExecute, (err, stdout, stderr) => {
	if (err) {
		console.log(err);// node couldn't execute the command
		return;
	}

	// the *entire* stdout and stderr (buffered)
	console.log(stdout);
	if (stderr) console.log(stderr);
})
.once("close", () => 
{
	let chromeExecute = `start chrome ${url.pathToFileURL(path.join(projectPath, args[0]))}`;
	
	console.log(`${projectPath}> ${chromeExecute}`);
	childProcess.exec(chromeExecute, (err, stdout, stderr) => {
		if (err) {
			console.log(err);// node couldn't execute the command
			return;
		}
	
		// the *entire* stdout and stderr (buffered)
		console.log(stdout);
		if (stderr) console.log(stderr);
	});
});