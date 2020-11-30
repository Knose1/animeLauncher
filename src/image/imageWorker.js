require("../global.js");
const commands = require("./imageWorkerCommands.js");
const PImage = require('pureimage');
const fs = require("fs");
const path = require("path");
const tokenGenerator = require("../utils/tokenGenerator");
const {parentPort, workerData} = require("worker_threads");

const NONE = -1;

let currentRequest = NONE;

/**
 * @ignore
 * @type {Function[]}
 */
let requests = [];

function log(message) {
	parentPort.postMessage({log:true, message:message});
}

parentPort.on("message", 
	({command}) => {
		if (command == commands.fetchFont)
			fetchFont();
	}
);
parentPort.on("message", 

	({command, requestId, text, option}) => {
		
		if (command == commands.generateImage)
			addRequest(generateImage.bind(this, requestId, text, option));
		
	}
);

parentPort.on("close", () => {
	parentPort.removeAllListeners();
});

function fetchFont()
{
	log("Loading Cambria font...");
	var fnt = PImage.registerFont('public/fonts/Cambria.ttf','Cambria');
	fnt.load(() => {
		log("Loading Cambria font... DONE !");
		parentPort.postMessage({log:false});
	});
}


function addRequest(fun) 
{
	if (currentRequest == NONE) {
		fun();
	}
	else requests.push(fun);
}
function generateImage(requestId, text, option)
{
	currentRequest = requestId;

	let width			= option.width 			 || 1920;
	let height			= option.height 		 || 1080;
	let textSize 		= option.textSize 		 || 1000;
	let backgroundColor	= option.backgroundColor || 'rgba(5,5,5,1)';
	let textColor		= option.textColor 		 || 'rgba(255,255,255,1)';

	log(`Generating image with text \"${text}\" and params : \"${JSON.stringify(option)}\"...`);

	//Create font layer
	var img = PImage.make(width,height);
	var ctx = img.getContext('2d');
	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0,0,width,height);
	ctx.fillStyle = textColor;
	ctx.font = `${textSize}px Cambria`;
	ctx.textAlign="center";
	ctx.textBaseline = 'middle'
	ctx.fillText(text, img.width/2, img.height / 2);

	let filePath = path.join(__tempFolder, tokenGenerator()+'.'+commands.fileExtension);

	PImage.encodePNGToStream(img, fs.createWriteStream(filePath))
	.then(() => {
		log(`Generated an image with text \"${text}\" at path \"${filePath}\"`);
		parentPort.postMessage({requestId, data:filePath});
		
	})
	.catch((e)=>{
		parentPort.postMessage({requestId, err : e});
	})
	.finally( () => {
		let fun = requests.shift();
		
		if (fun) fun();
		else currentRequest = NONE;
	});
}