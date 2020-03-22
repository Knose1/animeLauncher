const PImage = require('pureimage');
const tokenGenerator = require("./tokenGenerator");

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
 */
exports.getThumbail = function getThumbail(text) {
	//Fill with a black rectangle with 50% opacity
	var finalImage = PImage.make(1920,1080);
	var finalImageCtx = finalImage.getContext('2d');
	finalImageCtx.fillStyle = 'rgba(5,5,5, 0.5)';
	finalImageCtx.fillRect(0,0,1920,1080);

	//Create font layer
	var fontLayer = PImage.make(1920,1080);
	var fontLayerCtx = fontLayer.getContext('2d');
	
	fontLayerCtx.fillStyle = 'rgba(255,255,255, 1)';
	fontLayerCtx.font = "1000px Cambria";
	fontLayerCtx.fillText(text, 1920 / 2, 1080 / 2);
	
	//Add font layer to the image
	finalImageCtx.drawImage(fontLayer, 0, 0);

	return finalImage.data;
}