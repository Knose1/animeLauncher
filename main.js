const JSON_CONFIG = "config.json";
const JSON_ANIME = "index.json";
const ANIME_FOLDER = "episode";

const path = require("path");
const fs = require("fs");
const Server = require("./src/server");
const imageWriter = require("./src/image/imageWriter");
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
 * @type {string}
 */
var __root = path.resolve(__dirname);
global.__root = __root;

console.newLine = function() {console.log("\n\r")};
//*//////////////////////////////*//

const dataManager = require("./src/dataManager");
const JsonObject = dataManager.JsonObject;
const VideoPlayer = dataManager.VideoPlayer;
const YoutubePlayer = dataManager.YoutubePlayer;
const Anime = dataManager.Anime;

/**
 * @typedef Config
 * @property {dataManager.VideoPlayerConfig[]} videoPlayers
 */

/** */

var configLoader = new JsonObject(path.join(__dirname, JSON_CONFIG));
/**
 * @type {dataManager.VideoPlayer[]}
 */
var videoPlayers = [];

/**
 * @type {dataManager.Anime[]}
 */
var animes = [];

//Init imageWriter
imageWriter.init()
.then(
	//Loading configs
	() => configLoader.load()
)
.then(
	() => {
		/**
		 * @type {Config}
		 */
		var value = configLoader.value;

		//Get all video players
		for (let i = value.videoPlayers.length - 1; i >= 0; i--) {
			let lElement = value.videoPlayers[i];

			if (lElement.isNatif || lElement.isYoutube) 
			{
				videoPlayers.push(new YoutubePlayer(lElement));
				continue;
			}

			videoPlayers.push(new VideoPlayer(lElement));
		}
	}
)
.then(
	() => new Promise(async (resolve, reject) => {
		console.log("Loaded "+JSON_CONFIG);
		console.dir(configLoader.value);
		

		let episodeFolder = path.join(__dirname, ANIME_FOLDER); 

		//Load animes and episodes
		fs.readdir(episodeFolder, async(err, files) => {
			for (let i = files.length - 1; i >= 0; i--) {
				let lElement = files[i];
		
				//Load the anime config
				var animeFolderPath = path.join(episodeFolder, lElement);
				var animeLoader = new JsonObject(path.join(animeFolderPath, JSON_ANIME));
				try {
					await animeLoader.load();
					console.dir(animeLoader.value);
					
					animes.push(new Anime(animeLoader, animeFolderPath));
				}
				catch(e)
				{
					console.log(e);
				}

			}
			
			resolve();
		});

	})
)
.then(
	() => {
		console.newLine();
		console.log(`${Anime.list.length} animes has been loaded`);
		console.newLine();
		console.log("Launching server......");
		Server();
	}
)
.catch(
	(e) => {
		console.error(e);
		throw "Can't launch the server";
	}
);


