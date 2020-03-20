
/**
 * @namespace dataManager
 * @typedef VideoPlayerConfig
 * @property {string} name
 * @property {string[]} prefix
 * @property {boolean} downloadable
 * @property {boolean} autoDownload
 * @property {boolean} isNatif 
 * @property {boolean} isYoutube
 */

/**
 * @namespace dataManager
 * @typedef AnimeConfig
 * @property {string} name
 * @property {string} [thumbnailLink]
 * @property {EpisodeConfig[]} episodes
 */

/**
 * @namespace dataManager
 * @typedef EpisodeConfig
 * @property {string} [name]
 * @property {number} episodeId
 * @property {string} [posterLink]
 * @property {string[]} links
 * @property {string} [localLink]
 */

/** */

var fs = require('fs');
var ytdl = require('ytdl-core');

class JsonObject {
	/**
	 * @param {string} path
	 */
	constructor(path)
	{
		this.path = path;
		this.value = {};
	}
	
	/**
	 * @param {fs.NoParamCallback} [func]
	 */
	loadSync(func)
	{
		console.newLine();
		console.log("Loading sync "+this.path);

		var data = fs.readFileSync(this.path);

		try {
			this.value = JSON.parse(data);
			console.dir(myObj);
		}
		catch (err) {
			console.log(`There has been an error parsing your file "${this.path}".`)
			console.log(err);

			if (func) func(err);
		}
	}
	
	/**
	 * 
	 * @callback DataCalback
	 * @param {NodeJS.ErrnoException} err
	 * @param {Buffer} data
	 * @returns {void}
	 */
	
	/**
	 * @param {DataCalback} [func]
	 */
	load()
	{
		console.newLine();
		console.log("Loading "+this.path);
		
		return new Promise((resolve, reject) => {
			fs.readFile(this.path, (err, data) => {
				var error = err;
				if (!error) {
					try {
						this.value = JSON.parse(data);
					}
					catch (err) {
						console.log(`There has been an error parsing your file "${this.path}".`)
						console.log(err);
						error = err;
					}
				}

				if (error) reject(error);
				
				resolve();
			});
		});

	}

	/**
	 * @param {fs.NoParamCallback} func
	 */
	save(func)
	{
		console.newLine();
		console.log("Saving "+this.path);

		var data = JSON.stringify(this.value);

		fs.writeFile(this.path, data, function (err) {
			if (err) {
				console.log(`There has been an error saving your file "${this.path}".`);
				console.log(err.message);
				return;
			}

			if (func) func(err);
		});
	}
}

class VideoPlayer {
	/**
	 * @param {VideoPlayerConfig} config 
	 */
	constructor(config)
	{
		this.name = config.name
		this.isNatif = config.isNatif;
		this.prefix  = config.prefix;
		this.downloadable = config.downloadable;
		this.autoDownload = config.autoDownload;
	}

	getInfo(path)
	{

	}

	/**
	 * @param {string} path
	 */
	download(path)
	{
		
	}
}

class YoutubePlayer extends VideoPlayer {
	constructor(config)
	{
		super(config);
	}

	/**
	 * 
	 * @callback DownloadCallback
	 * @param {ytdl.videoFormat} format 
	 */

	/**
	 * @callback InfoCallback
	 * @param {Error} err
	 * @param {ytdl.videoInfo} info
	 * @param {DownloadCallback} download
	 */

	/**
	 * @param {string} path
	 * @param {InfoCallback} onInfo
	 */
	download(path, onInfo)
	{
		ytdl.getInfo(path, {filter: "audioandvideo"}, (err, info) => {
			if (err) 
			{
				console.error(`Error loading \"${path}\"`);
				console.error(err);
			}
			onInfo(err, info, (format) => {ytdl.downloadFromInfo(info, {format: format} );});
		});
	}
}

class Anime {
	/**
	 * 
	 * @param {JsonObject} jsonObject 
	 * @param {VideoPlayer[]} videoPlayers
	 */
	constructor(jsonObject, videoPlayers) 
	{
		/**
		 * @type {AnimeConfig}
		 */
		let data = jsonObject.value;

		this.name = data.name;
		
		/**
		 * @type {Episode[]}
		 */
		this.episodes = [];

		let episodes = data.episodes;
		for (let i = episodes.length - 1; i >= 0; i--) {
			let lElement = episodes[i];
			
			this.episodes.push(new Episode(lElement, videoPlayers));
		}

		this.episodes = this.episodes.sort( (a,b) => a.episodeId - b.episodeId);
	}
}

class Episode {
	/**
	 * 
	 * @param {EpisodeConfig} config 
	 * @param {VideoPlayer[]} videoPlayerList 
	 */
	constructor(config, videoPlayerList) 
	{
		this.localLink;
		this.episodeId = config.episodeId;
		this.videoPlayer;
	}

	get Islocal() {return this.localLink}
}

exports.JsonObject = JsonObject;
exports.VideoPlayer = VideoPlayer;
exports.YoutubePlayer = YoutubePlayer;
exports.Anime = Anime;
exports.Episode = Episode;