
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
const mime = require("mime-types");
const event = require("events");
const EventEmitter = event.EventEmitter;

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

class DownloadEpisode 
{
	get list() {return DownloadEpisode._list || (DownloadEpisode._list = [])}
	/**
	 * 
	 * @param {Episode} episode
	 */
	constructor(episode, videoPlayerId)
	{
		this.episode = episode;
		this.id = DownloadEpisode.list.length;

		this.player = VideoPlayer.getVideoPlayerById(videoPlayerId);
		this.isReady = false;
		this.isDownloading = false;
		this.progress = 0;

		DownloadEpisode.list.push(this);
	}

	_onDownloadEnd(pathToFile)
	{
		this.episode.setLocalPath(pathToFile);
	}

	download(url, format)
	{
		this.isDownloading = true;

		if (this.player instanceof YoutubePlayer) this.downloadYoutube(format);
		else this.downloadNormal(url);
	}

	downloadNormal(url) 
	{
		this.player.download(url, this.episode.path);
	}

	downloadYoutube(format)
	{
		this.promise = YoutubePlayer.instance.download(this.episode.path, format);
		this.promise.then(
			(path) => {
				this.isReady = true;
				this.progress = 0.99;

				return this.episode.setLocalPath()
			}
		)
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

		this.id = VideoPlayer.list.length;
		VideoPlayer.list.push(this);
	}
	
	toPublic() 
	{
		return {
			name: this.name,
			isNatif: this.isNatif,
			downloadable: this.downloadable,
			autoDownload: this.autoDownload,
			id: this.id
		};
	}

	/**
	 * @public
	 * @param {string} downloadUrl
	 * @param {string} fileName
	 */
	download(downloadUrl, fileName)
	{
		/**
		 * @typedef DownloadObject
		 * @property {number} progress - The download progress in %
		 * @property {string} contentType
		 * @property {string} fileName
		 */
		/**
		 * @event DownloadEvent#progress
		 */
		/**
		 * @event DownloadEvent#complete
		 */

		/**
		 * @fires DownloadEvent#progress
		 * @fires DownloadEvent#complete
		 */
		let emitter = new EventEmitter();

		let url = new URL(downloadUrl);
		/**
		 * @type {http.RequestOptions}
		 */
		let options = {headers: {Accept: "video/webm, video/mpeg, video/ogg"}}

		let file = null;
		let request = http.get(downloadUrl, options)
		request.on("response", async function(response) {

			let len = ?;

			//Init the file with the response extension
			if (file === null) {
				fileName += mime.extension(response.headers["content-type"]);
				fs.createWriteStream(fileName);
			}
			
			response.on('data', function(chunk) {
				//Write chunk into the file
				file.write(chunk);

				//Get progress
				downloaded += chunk.length
				percent = (100.0 * downloaded / len).toFixed(2)
				process.stdout.write(`Downloading ${percent}% ${downloaded} bytes\r`)

				emitter.emit('progress', {progress:percent, })
			})

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

		return emitter;
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

	/**
	 * 
	 * @param {number} id 
	 */
	static getVideoPlayerById(id)
	{
		return VideoPlayer.list[id];
	}
}

class YoutubePlayer extends VideoPlayer {
	/**
	 * @returns {YoutubePlayer}
	 */
	static get instance() {return YoutubePlayer._instance}

	constructor(config)
	{
		super(config);
		if (!YoutubePlayer._instance) YoutubePlayer._instance = this;
		else console.warn("2 YoutubePlayer has been founded");
		
	}

	/**
	 * @param {string} localFileWithoutExtension
	 * @param {ytdl.videoFormat} format
	 */
	download(localFileWithoutExtension, format)
	{
		return new Promise((resolve, reject) => {
			let extension = mime.extension(format.mimeType) | "";
			
			let path = localFileWithoutExtension+"."+extension;

			let stream = ytdl(format.url, {format: format} ).pipe(fs.createWriteStream(path));
			stream.on('finish', function() {
				resolve(path);
				res.writeHead(204);
				res.end();
			});
		});
	}

	/**
	 * 
	 * @param {string} url
	 * @returns {Promise<ytdl.videoInfo>} 
	 */
	getInfo(url)
	{
		return new Promise((resolve, reject) => {
			ytdl.getInfo(url, {filter: "audioandvideo"}, (err, info) => {
				if (err) 
				{
					console.error(`Error loading \"${url}\"`);
					console.error(err);
					reject(err);
					return;
				}
				resolve(info);
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
			id : this.id,
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
		
		this.jsonObject = jsonObject;
		this.name = data.name;
		if (!data.name) throw `"${nameof(name)}" is null in anime : `+folderPath;

		this.thumbnailLink = data.thumbnailLink;

		/**
		 * @readonly
		 */
		this._path = folderPath;
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
		this.id = Anime.list.length;

		Anime.list.push(this);
	}

	/**
	 * 
	 * @param {number} episodeId 
	 */
	getEpisodeById(episodeId)
	{
		for (let i = this.episodes.length - 1; i >= 0; i--) {
			let lElement = this.episodes[i];
			if (lElement.episodeId == episodeId) return lElement;
		}
		return null;
	}

	get path() {return path.join(__root, this.path);}
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
	/**
	 * @typedef {Object} PlayerInfo
	 * @property {string} url
	 * @property {string} [ytInfo]
	 * @property {boolean} [isYoutube]
	 * @property {*} player
	 */
	/**
	 * @typedef {Object} EpisodeInfo
	 * @property {string} name
	 * @property {number} episodeId
	 * @property {string} posterLink
	 * @property {bool} isLocal
	 * @property {bool} hasPoster
	 * @property {PlayerInfo[]} players
	 */
	/**
	 * @public
	 */
	async getInfo(loadYoutubeInfo = true) 
	{
		
		/**
		 * @type {EpisodeInfo}
		 */
		let lToReturn = this.toPublic();
		lToReturn.players = [];
		lToReturn.isLocal = this.isLocal;
		lToReturn.hasPoster = this.hasPoster;

		for (let i = this.links.length - 1; i >= 0; i--) {
			/**
			 * @type {PlayerInfo}
			 */
			let lToPush = {};
			let url = this.links[i];
			let videoPlayer = VideoPlayer.getPlayer(url);
			
			lToPush.isYoutube = false;
			if (videoPlayer instanceof YoutubePlayer)
			{
				lToPush.isYoutube = true;
				if (loadYoutubeInfo) {
					let ytInfo = await videoPlayer.getInfo(url);
					lToPush.ytInfo = ytInfo;
				}
			}

			lToPush.url = url;
			lToPush.player = videoPlayer.toPublic();

			lToReturn.players.push(lToPush);
		}

		return lToReturn;
	}

	setLocalPath(path)
	{
		throw "Not implemented";
	}

	get isLocal() {return Boolean(this.localLink);}
	get hasPoster() {return Boolean(this.posterLink);}
	get path() {
		return path.join(this.anime.path, this.isLocal ? this.localLink : `${this.episodeId}`);
	}
}

exports.JsonObject = JsonObject;
exports.DownloadEpisode = DownloadEpisode;
exports.VideoPlayer = VideoPlayer;
exports.YoutubePlayer = YoutubePlayer;
exports.Anime = Anime;
exports.Episode = Episode;