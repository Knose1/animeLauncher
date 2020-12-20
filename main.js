/**
 * @namespace server
 */
/**
 * @namespace https
 * @memberof server
 */
/**
 * @namespace global
 * @memberof server
 */
/**
 * @namespace image
 * @memberof server
 */
/**
 * @namespace data
 * @memberof server
 */
/**
 * @namespace config
 * @memberof server.data
 */
/**
 * @namespace public
 * @memberof server.data
 */

const inspector = require("inspector");
try {
	inspector.waitForDebugger();
} catch (_) {}

const JSON_CONFIG = "config.json";
const JSON_ANIME = "index.json";
const ANIME_FOLDER = "episode";
const ACCOUNTS_FOLDER = "accounts";

const path = require("path");
const fs = require("fs");
const Server = require("./src/server");
const imageWriter = require("./src/image/imageWriter");

const {createLogFile} = require("./src/global");
createLogFile();

const dataManager = require("./src/dataManager");
const JsonObject = dataManager.JsonObject;
const VideoPlayer = dataManager.VideoPlayer;
const YoutubePlayer = dataManager.YoutubePlayer;
const Anime = dataManager.Anime;
const Account = dataManager.Account;

/**
 * @memberof server.data.config
 * @typedef Config
 * @property {number} port
 * @property {boolean} keepThumbnails
 * @property {dataManager.VideoPlayerConfig[]} videoPlayers
 */

/** 
 * @ignore
 */
var configLoader = new JsonObject(path.join(__dirname, JSON_CONFIG));


let tempFileRemove = new Promise((resolve, reject) => {
	//CLEAR TEMP FOLDER
	console.log("Clearing temp...");
	if (fs.existsSync(__tempFolder))
	{
		let files = fs.readdirSync(__tempFolder);

		for (let i = files.length - 1; i >= 0; i--) {
			let file = files[i];

			let filePath = path.join(__tempFolder, file);
			fs.unlinkSync(filePath);
		}

	}
	else
	{
		fs.mkdir(__tempFolder);
	}

	console.log("Clearing temp... DONE !");
	console.newLine();

	resolve();
});

tempFileRemove.then(
	//INIT IMAGE WRITER
	() => imageWriter.init()
)
.then(
	//Loading configs
	() => configLoader.load()
)
.then(
	() => {
		//READ CONFIGS

		/**
		 * @type {Config}
		 */
		var value = configLoader.value;
		console.log(configLoader);

		if (!value.videoPlayers) value.videoPlayers = [];

		try {
			//Get all video players
			for (let i = value.videoPlayers.length - 1; i >= 0; i--) {
				let lElement = value.videoPlayers[i];

				if (lElement.isNatif || lElement.isYoutube) 
				{
					new YoutubePlayer(lElement);
					continue;
				}

				new VideoPlayer(lElement);
			}
		} catch (e) {
			console.error(e);
		}

		console.log("Loaded "+JSON_CONFIG);
		console.dir(configLoader.value);
	}
)
.then(
	() => new Promise(async (resolve, reject) => {

		//LOADING ANIMES

		let episodeFolder = path.join(__dirname, ANIME_FOLDER); 
		if (!fs.existsSync(episodeFolder)) {
			fs.mkdirSync(episodeFolder);
		}

		//Load animes and episodes
		fs.readdir(episodeFolder, async(err, files) => {
			
			let invalidFolders = [];

			for (let i = files.length - 1; i >= 0; i--) {
				let lElement = files[i];
				
				//Avoid files, keep folders
				if (path.extname(lElement) != "") continue;
		
				//Load the anime config
				var animeFolderPath = path.join(episodeFolder, lElement);
				var animeLoader = new JsonObject(path.join(animeFolderPath, JSON_ANIME));
				try {
					await animeLoader.load();
					console.dir(animeLoader.value);
					
					new Anime(animeLoader, animeFolderPath);
				}
				catch(e)
				{
					console.log(e);
				}

			}
			
			if (invalidFolders.length > 0) {
			console.newLine();
			console.log(`${invalidFolders.length} animes have encountered an error :`);
			console.log(invalidFolders.join("\r\n"));
			}

			console.newLine();
			console.log(`${Anime.list.length} animes have been loaded`);

			resolve();
		});

	})
)
.then(
	() => new Promise(async (resolve, reject) => {

		//LOADING ACCOUNTS

		let accountFolder = path.join(__dirname, ACCOUNTS_FOLDER); 
		if (!fs.existsSync(accountFolder)) {
			fs.mkdirSync(accountFolder);
		}
		
		fs.readdir(accountFolder, async(err, files) => {
			
			let invalidFiles = [];

			for (let i = files.length - 1; i >= 0; i--) {
				let lElement = files[i];

				//Avoid folders, keep files
				if (path.extname(lElement) == "") continue;
		
				//Load the anime config
				var accountFilePath = path.join(accountFolder, lElement);
				var jsonAccount = new JsonObject(accountFilePath);
				try {
					await jsonAccount.load();
					console.dir(jsonAccount.value);
					
					new Account(jsonAccount, accountFilePath);
				}
				catch(e)
				{
					console.log(e);
				}

			}
			
			if (invalidFiles.length > 0) {
				console.newLine();
				console.log(`${invalidFiles.length} accounts have encountered an error :`);
				console.log(invalidFiles.join("\r\n"));
			}
			console.newLine();
			console.log(`${Account.list.length} accounts have been loaded`);

			resolve();
		});

	})
)
.then(
	() => {
		console.newLine();
		console.log("Launching server......");
		Server(configLoader.value);
	}
)
.catch(
	(e) => {
		console.error(e);
		throw "Can't launch the server";
	}
);


