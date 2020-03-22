const PImage = require('pureimage');
const fs = require("fs");
const path = require("path");
const tokenGenerator = require("./utils/tokenGenerator");

exports.init = function init()
{
	return new Promise(async (resolve, reject) => {
		var fnt = PImage.registerFont('public/fonts/Cambria.ttf','Cambria');
		fnt.load(() => {
			resolve();
		});
	});
}
/**
 * @param {string} text
 * @param {number} [textSize=1000]
 * @returns {Promise<string>} Return the path to the file
 */
exports.getThumbail = function getThumbail(text, textSize = 1000) {
	return new Promise((resolve, reject) => {
		console.log(`Generating image with text \"${text}\" at size \"${textSize}\"...`);

		//Create font layer
		var img = PImage.make(1920,1080);
		var ctx = img.getContext('2d');
		ctx.fillStyle = 'rgba(5,5,5, 0.5)';
		ctx.fillRect(0,0,1920,1080);
		ctx.fillStyle = 'rgba(255,255,255, 1)';
		ctx.font = `${textSize}px Cambria`;
		ctx.textAlign="center";
		ctx.textBaseline = 'middle'
		ctx.fillText(text, img.width/2, img.height / 2);
		
		let filePath = path.join(__root, '_temp', tokenGenerator()+'.png');

		PImage.encodePNGToStream(img, fs.createWriteStream(filePath)).then(() => {
			console.log(`Generated an image with text \"${text}\" at path \"${filePath}\"`);
			resolve(filePath);
		}).catch((e)=>{
			reject(e);
		});
	});
}