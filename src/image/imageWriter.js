const PImage = require('pureimage');
const { Worker } = require("worker_threads");

exports.init = function init()
{
	return new Promise(async (resolve, reject) => {
		console.log("Loading Cambria font");
		var fnt = PImage.registerFont('public/fonts/Cambria.ttf','Cambria');
		fnt.load(() => {
			resolve();
		});
	});
}

/**
 * @typedef ThumbailOption
 * @property {number} [width=1920]
 * @property {number} [height=1920]
 * @property {number} [textSize=1000]
 * @property {string} [backgroundColor='rgba(5,5,5,1)']
 * @property {string} [textColor='rgba(255,255,255,1)']
 */

/**
 * @param {string} text
 * @param {ThumbailOption} [option]
 * @returns {Promise<string>} Return the path to the file
 */
exports.getThumbail = function getThumbail(text, option = {}) {
	return new Promise((resolve, reject) => {
		//Using a Worker since 'pureimage' iterates on each pixel when filling
		let drawWorker = new Worker(require.resolve("./imageWorker.js"), {
			workerData: {text, option}
		});

		drawWorker.on("error", (e) => {
			console.log(e);
		});
		drawWorker.on("message", (message) => {
			if (message.err) reject(message.err);
			else resolve(message.data);
		});
	});
}
exports.PImage = () => {return PImage};