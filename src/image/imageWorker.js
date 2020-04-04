const PImage = require('./imageWriter').PImage();
const fs = require("fs");
const path = require("path");
const tokenGenerator = require("../utils/tokenGenerator");
const {parentPort, workerData} = require("worker_threads");

/**
 * @type {string}
 */
let text = workerData.text;

/**
 * @type {ThumbailOption}
 */
let option = workerData.option;

let width			= option.width 			 || 1920;
let height			= option.height 		 || 1080;
let textSize 		= option.textSize 		 || 1000;
let backgroundColor	= option.backgroundColor || 'rgba(5,5,5,1)';
let textColor		= option.textColor 		 || 'rgba(255,255,255,1)';

console.log(`Generating image with text \"${text}\" and params : \"${JSON.stringify(option)}\"...`);

//Create font layer
var img = PImage.make(width,height);
var ctx = img.getContext('2d');
ctx.fillStyle = backgroundColor;
ctx.fillRect(0,0,1920,1080);
ctx.fillStyle = textColor;
ctx.font = `${textSize}px Cambria`;
ctx.textAlign="center";
ctx.textBaseline = 'middle'
ctx.fillText(text, img.width/2, img.height / 2);

/*for(var i=x; i<x+w; i++) {
	for(var j=y; j<y+h; j++) {
		ctx.fillPixel(i,j);
	}
}*/

let filePath = path.join(__root, '_temp', tokenGenerator()+'.png');

PImage.encodePNGToStream(img, fs.createWriteStream(filePath)).then(() => {
	console.log(`Generated an image with text \"${text}\" at path \"${filePath}\"`);
	parentPort.postMessage({data:filePath});
}).catch((e)=>{
	parentPort.postMessage({err : e});
});