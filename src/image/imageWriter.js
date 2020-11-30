const { Worker } = require("worker_threads");
const commands = require("./imageWorkerCommands");

let requestId = -1;


var drawWorker = new Worker(require.resolve("./imageWorker.js"));
drawWorker.on("error", (e) => {
	console.log(e);
})
exports.init = function init()
{
	return new Promise(async (resolve, reject) => {
		drawWorker.postMessage({command:commands.fetchFont});
		drawWorker.on("message", ({log, message}) => {
			if (log) {
				console.log(message);
			}
		});
		function lLog({log}) {
			if (!log) 
			{
				drawWorker.off("message",lLog);
				resolve();
			}
		}
		drawWorker.on("message", lLog);
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
		let myRequestId = ++requestId;

		function onMessage (message) 
		{
			if (message.requestId != myRequestId) return;

			drawWorker.off("message", onMessage);

			if (message.err) reject(message.err);
			else resolve(message.data);
			
		}

		drawWorker.postMessage({
			command:commands.generateImage, 
			requestId: myRequestId, 
			text, 
			option
		});

		drawWorker.on("message", onMessage);
	});
}