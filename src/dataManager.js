
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

const http = require('http');
var fs = require('fs');
var ytdl = require('ytdl-core');
const path = require("path");

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
	 * @readonly
	 * @type {VideoPlayer[]}
	 */
	static get list() {return VideoPlayer._list || (VideoPlayer._list = []);}

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

		VideoPlayer.list.push(this);
	}

	/**
	 * @public
	 * @param {string} url 
	 */
	getInfo(url) 
	{

	}

	/**
	 * @public
	 * @param {string} downloadUrl
	 * @param {string} fileName
	 */
	download(downloadUrl, fileName)
	{
		return new Promise(async (resolve, reject) => {
			
			var file = fs.createWriteStream(fileName);
			http.get(downloadUrl, async function(response) {
				response.pipe(file);

				file.on('finish', async function() {
					// close() is async, call resolve after close completes.
					await file.close();
					resolve(fileName);  
				});
			})
			// Handle errors
			.on('error', async function(err) {
				
				// Delete the file async. (But we don't check the result)
				await fs.unlink(fileName); 
				if (reject) reject(err.message);
			});
		});
	}

	/**
	 * @public
	 * @param {string} url 
	 * @returns {boolean}
	 */
	hasPrefix(url)
	{
		for (let i = this.prefix.length - 1; i >= 0; i--) {
			let lElement = this.prefix[i];

			if (url.startsWith(lElement)) return true;
		}

		return false;
	}

	/**
	 * @public
	 * @param {Episode} episode 
	 */
	static getInfo(episode) 
	{
		
	}

	/**
	 * @public
	 * @param {string} url
	 * @returns {VideoPlayer}
	 */
	static getPlayer(url)
	{
		for (let i = VideoPlayer.list.length - 1; i >= 0; i--) {
			let lElement = VideoPlayer.list[i];
			if (lElement.hasPrefix(url)) return lElement;
		}

		return null;
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

	getInfo(path)
	{
		return new Promise((resolve, reject) => {
			ytdl.getInfo(path, {filter: "audioandvideo"}, (err, info) => {
				if (err) 
				{
					console.error(`Error loading \"${path}\"`);
					console.error(err);
					reject(err);
					return;
				}
				onInfo(err, info, (format) => {ytdl.downloadFromInfo(info, {format: format} );});
			});
		});
	}
}

class Anime {
	/**
	 * @readonly
	 * @type {Anime[]}
	 */
	static get list() {return Anime._list || (Anime._list = []);}
	
	static get publicList() 
	{
		return Anime.list.map(m => m.toPublic());
	}
	
	toPublic() {
		var lToReturn = {
			episodes : this.episodes.map(e => e.toPublic()),
			name : this.name,
			thumbnailLink : this.thumbnailLink
		};

		return lToReturn;
	}

	/**
	 * 
	 * @param {JsonObject} jsonObject 
	 * @param {string} folderPath
	 */
	constructor(jsonObject, folderPath) 
	{
		/**
		 * @type {AnimeConfig}
		 */
		let data = jsonObject.value;

		this.name = data.name;
		if (!data.name) throw `"${nameof(name)}" is null in anime : `+folderPath;

		this.thumbnailLink = data.thumbnailLink;

		/**
		 * @readonly
		 */
		this.path = folderPath;
		if (!folderPath) throw `${nameof(folderPath)} is null (code exception)`;
		
		/**
		 * @type {Episode[]}
		 */
		this.episodes = [];

		let episodes = data.episodes;
		if (!episodes) throw `"${nameof(episodes)}" is null in anime : `+folderPath;

		for (let i = episodes.length - 1; i >= 0; i--) {
			let lElement = episodes[i];
			
			try
			{
				this.episodes.push(new Episode(lElement));
			}
			catch(e)
			{
				console.error(e);
			}
		}

		this.episodes = this.episodes.sort( (a,b) => a.episodeId - b.episodeId);

		Anime.list.push(this);
	}
}

class Episode {
	/**
	 * 
	 * @param {EpisodeConfig} config 
	 * @param {Anime} anime
	 */
	constructor(config, anime) 
	{
		if (config.episodeId === null || config.episodeId === undefined) throw  `"${nameof({episodeId})}" is null in anime : `+folderPath;

		this.name 	= config.name || "";
		this.episodeId 	= config.episodeId || -1;
		this.posterLink = config.posterLink || "";
		this.links 		= config.links;
		this.localLink 	= config.localLink || "";
		this.anime 		= anime;
	}

	toPublic() {
		var lToReturn = {
			name : this.name,
			episodeId : this.episodeId,
			posterLink : this.posterLink
		};

		return lToReturn;
	}

	get islocal() {return Boolean(this.localLink);}
	get hasPoster() {return Boolean(this.posterLink);}
	get path() {return path.join(__dirname, this.anime.path, this.localLink);}
}

exports.JsonObject = JsonObject;
exports.VideoPlayer = VideoPlayer;
exports.YoutubePlayer = YoutubePlayer;
exports.Anime = Anime;
exports.Episode = Episode;