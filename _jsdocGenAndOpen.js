const childProcess = require('child_process');
const path = require('path');
const url = require('url');

let args = process.argv.slice(2);
let jsdocArgs = ["--verbose"];

let projectPath = __dirname;

if (args.length == 0)
{
	throw "usage : node _jsdocGenAndOpen/index.js [jsonConfig.json] <pathToIndex.html>"
} 
if (args.length == 2) 
{
	jsdocArgs.unshift("--configure",args.shift());
}


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