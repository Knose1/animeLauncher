
/**
 * @namespace
 * @typedef VideoPlayerConfig
 * @property {string} name
 * @property {string[]} prefix
 * @property {boolean} downloadable
 * @property {boolean} autoDownload
 * @property {boolean} isNatif 
 * @property {boolean} isYoutube
 */

/**
 * @typedef {Object} PublicVideoPlayer
 * @property {string} name
 * @property {boolean} isNatif
 * @property {boolean} downloadable
 * @property {boolean} autoDownload
 * @property {number} id
 * id: this.id
 */ 
/**
 * @typedef {Object} PlayerInfo
 * @property {string} url
 * @property {string} [ytInfo]
 * @property {boolean} [isYoutube]
 * @property {*} player
 */

 /*-****************************-*/

/**
 * @namespace
 * @typedef AnimeConfig
 * @property {string} name
 * @property {string} [thumbnailLink]
 * @property {EpisodeConfig[]} episodes
 */

/**
 * @namespace
 * @typedef PublicAnime
 * @property {number} id
 * @property {PublicEpisode} episodes
 * @property {string} name
 * @property {string} thumbnailLink
 */

/*-*****************************-*/

/**
 * @namespace
 * @typedef EpisodeConfig
 * @property {string} [name]
 * @property {number} episodeId
 * @property {string} [posterLink]
 * @property {string[]} links
 * @property {string} [localLink]
 */
/**
 * @typedef PublicEpisode 
 * @property {string} name The name of the episode
 * @property {number} episodeId The unique id of the episode (define the order between episodes)
 * @property {string} posterLink The uri of the anime poster
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
 * @typedef ReqDownloadData
 * @property {number} progress The download progress in %
 * @property {string} contentType
 * @property {string} fileName
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
	 * @public
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
	 * @returns {Promise<void>}
	 */
	save()
	{
		console.newLine();
		console.log("Saving "+this.path);

		return new Promise((resolve, reject) => {
			var data = JSON.stringify(this.value, null, "\t");//add tabs to make it more readable

			fs.writeFile(this.path, data, function (err) {
				if (err) {
					console.log(`There has been an error saving your file "${this.path}".`);
					console.log(err.message);
					reject(err);
					return;
				}

				resolve();
			});
		});
	}
}

class DownloadEpisode 
{
	/**
	 * @type {DownloadEpisode[]}
	 */
	static get list() {return DownloadEpisode._list || (DownloadEpisode._list = [])}
	/**
	 * Constructor of the class
	 * @param {Episode} episode
	 * @param {number}
	 * @see {@link Videoplayer#id}
	 */
	constructor(episode, videoPlayerId)
	{
		//TODO : Documentation

		this.episode = episode;
		this.id = DownloadEpisode.list.length;

		this.player = VideoPlayer.getVideoPlayerById(videoPlayerId);
		this.isReady = false;
		this.isDownloading = false;
		this.progress = 0;

		if (!this.player.downloadable) throw "Is not downloadable";

		DownloadEpisode.list.push(this);
	}

	/**
	 * Call {@link Episode#setLocalPath} and set itself ready when it's done
	 * @private
	 * @param {string} pathToFile
	 * @see {@link Episode#setLocalPath}
	 */
	_setLocalPath(pathToFile)
	{
		this.episode.setLocalPath(pathToFile)
		.then(
			() => {
				this.isReady = true;
				this.isDownloading = false;
				this.progress = 1;
			}
		);
	}

	/**
	 * Launch the download
	 * @param {string} url 
	 * @param {object} format 
	 * @see {@link DownloadEpisode#_setEvents} 
	 */
	download(url, format)
	{
		let emitter = this.player.download( (this.player.autoDownload ? this.episode.getUrlByPlayer(this.player) : url ) , format, this.episode.path);
		this._setEvents(emitter);
	}

	/**
	 * Set the events of the emitter
	 * @private
	 * @param {event.EventEmitter} emitter
	 * @see {@link DownloadEpisode#download} 
	 */
	_setEvents(emitter) 
	{
		emitter
		.on('progress',
		/**
		 * @param {ReqDownloadData} recDownloadData
		 */
		(recDownloadData) => {
			this.progress = recDownloadData.progress / 100 * 0.99;
		})

		.on('complete',
		/**
		 * @param {ReqDownloadData} recDownloadData
		 */
		(recDownloadData) => {
			this.progress = 0.99;
			this._setLocalPath(recDownloadData.fileName);
		})

		.on('error',
		/**
		 * @param {string} err
		 */
		(err) => {
			console.err(err);
		});
	}

	/**
	 * 
	 * @param {Episode} episode 
	 */
	static getFromEpisode(episode)
	{
		for (let i = DownloadEpisode.list.length - 1; i >= 0; i--) {
			let lElement = DownloadEpisode.list[i]
		}
	}
}

/**
 * @public
 */
class VideoPlayer {
	/**
	 * The list of VideoPlayer
	 * @public
	 * @readonly
	 * @type {VideoPlayer[]}
	 */
	static get list() {return VideoPlayer._list || (VideoPlayer._list = []);}

	/**
	 * Constructor of the class
	 * @public
	 * @param {VideoPlayerConfig} config 
	 */
	constructor(config)
	{
		//TODO : Documentation

		this.name = config.name
		this.isNatif = config.isNatif;
		this.prefix  = config.prefix;
		this.downloadable = config.downloadable;
		this.autoDownload = config.autoDownload;

		this.id = VideoPlayer.list.length;
		VideoPlayer.list.push(this);
	}
	
	/**
	 * Return the public information of the VideoPlayer (= the informations to give to the client)
	 * @public
	 * @returns {PublicVideoPlayer}
	 */
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
	 * Fire the event "complete" on the emitter
	 * @protected
	 * @param {event.EventEmitter} emitter 
	 * @param {ReqDownloadData} recDownloadData 
	 */
	_dispatchOnComplete(emitter, recDownloadData)
	{
		/**
		 * @event complete
		 * @type {ReqDownloadData}
		 */
		emitter.emit('complete', recDownloadData);
	}

	/**
	 * Fire the event "progress" on the emitter
	 * @protected
	 * @param {event.EventEmitter} emitter 
	 * @param {ReqDownloadData} recDownloadData 
	 */
	_dispatchOnProgress(emitter, recDownloadData)
	{
		/**
		 * @event progress
		 * @type {ReqDownloadData}
		 */
		emitter.emit('progress', recDownloadData);
		
	}

	/**
	 * Fire the event "error" on the emitter
	 * @protected
	 * @fires error
	 * @param {event.EventEmitter} emitter 
	 * @param {string} err 
	 */
	_dispatchOnError(emitter, err)
	{
	
		/**
		 * @event error
		 * @type {string}
		 */
		emitter.emit('error', err);
	}
	/**
	 * Download the video using the given link (async)
	 * @public
	 * @fires progress
	 * @fires complete
	 * @fires error
	 * @param {string} downloadUrl
	 * @param {object} format unused
	 * @param {string} fileName
	 * @returns {EventEmitter}
	 */
	download(downloadUrl, format, fileName)
	{
		let emitter = new EventEmitter();

		let url = new URL(downloadUrl);
		/**
		 * @type {http.RequestOptions}
		 */
		let options = {
			headers: {Accept: "video/webm, video/mpeg, video/ogg"},
			timeout: 10000
		}

		/**
		 * @type {fs.WriteStream}
		 */
		let file = null;
		let request = http.get(downloadUrl, options)
		request.on("response", async (response) => {
			
			let len = parseInt(response.headers['content-length'], 10);
			let downloaded = 0;
			let contentType = response.headers["content-type"];

			//Init the file with the response extension
			if (file === null) {
				fileName += mime.extension(contentType);
				file = fs.createWriteStream(fileName);
			}
			
			response.on('data', (chunk) => {
				//Write chunk into the file
				file.write(chunk);

				//Get progress
				downloaded += chunk.length
				let progress = (100.0 * downloaded / len).toFixed(2)
				//process.stdout.write(`Downloading ${percent}% ${downloaded} bytes\r`)

				this._dispatchOnProgress(emitter, {progress, contentType, fileName});
			})
			
			response.on('end', async () => {
				// close() is async, call resolve after close completes.
				await file.close();
				this._dispatchOnComplete(emitter, {progress:100, contentType, fileName});  
			});
		})
		.on('timeout', async () => {
			request.abort();

			// Delete the file async. (But we don't check the result)
			await fs.unlink(fileName); 
			this._dispatchOnError(emitter, "[Request Timeout] "+fileName);
		})
		// Handle errors
		.on('error', async (err) => {
			
			// Delete the file async. (But we don't check the result)
			await fs.unlink(fileName); 
			this._dispatchOnError(emitter, err.message);
		});

		return emitter;
	}

	/**
	 * Compare the url with the prefix and return true if the url match a prefix in the prefix list
	 * @public
	 * @param {string} url 
	 * @returns {boolean} Return true if the url match a prefix in the prefix list
	 * @see {@link Videoplayer.prefix}
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
	 * Return the first Videoplayer with its prefix matching the url
	 * @public
	 * @param {string} url
	 * @returns {VideoPlayer}
	 * @see {@link Videoplayer.prefix}
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
	 * Return the video player corrisponding 
	 * @public
	 * @param {number} id 
	 * @return {VideoPlayer}
	 */
	static getVideoPlayerById(id)
	{
		return VideoPlayer.list[id];
	}
}

/**
 * A class used to handle the download of a youtube video. It also get the video info.
 * @public
 * @extends VideoPlayer
 */
class YoutubePlayer extends VideoPlayer {
	/**
	 * Unique instance of the class
	 * @public
	 * @readonly
	 * @returns {YoutubePlayer}
	 */
	static get instance() {return YoutubePlayer._instance}

	/**
	 * Constructor of the class
	 * @public
	 * @param {VideoPlayerConfig} config 
	 */
	constructor(config)
	{
		super(config);
		
		if (!YoutubePlayer._instance) YoutubePlayer._instance = this;
		else console.warn("2 YoutubePlayer has been founded");
	}

	/**
	 * Download the youtube video (async)
	 * @public
	 * @override
	 * @fires progress
	 * @fires complete
	 * @fires error
	 * @param {string} downloadUrl Unused
	 * @param {ytdl.videoFormat} format
	 * @param {string} localFileWithoutExtension
	 * @returns {EventEmitter}
	 */
	download(downloadUrl, format, localFileWithoutExtension)
	{
		let emitter = new EventEmitter();

		let extension = mime.extension(format.mimeType) | "";
		
		let path = localFileWithoutExtension+"."+extension;

		let video = ytdl(format.url, {format: format} );
		video.on('response', (res) => {
			var totalSize = res.headers['content-length'];
			var dataRead = 0;
			res.on('data', (data) => {
				dataRead += data.length;
				var percent = dataRead / totalSize;
				let progress = (percent * 100).toFixed(2);
				this._dispatchOnProgress(emitter, { progress, contentType:format.mimeType, fileName: path } );
			});
		})
		.on('error', (e) => {this._dispatchOnError(emitter, e);});

		let stream = video.pipe(fs.createWriteStream(path));
		stream.on('finish', () => {
			this._dispatchOnComplete(emitter, { progress: 100, contentType:format.mimeType, fileName: path });
			res.writeHead(204);
			res.end();
		});

		return emitter;
	}

	/**
	 * Fetch the informations of the youtube video
	 * @public
	 * @requires "node_modules/ytdl"
	 * @param {string} url
	 * @returns {Promise<ytdl.videoInfo>}
	 * @see ytdl#getInfo 
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

/**
 * Store the datas of an anime. Can update the index.json of the anime.
 * @public
 */
class Anime {
	/**
	 * The list of Animes
	 * @public
	 * @readonly
	 * @type {Anime[]}
	 */
	static get list() {return Anime._list || (Anime._list = []);}
	
	/**
	 * The list of Animes mapped with their public informations
	 * @public
	 * @returns {PublicAnime[]}
	 */
	static get publicList() 
	{
		return Anime.list.map(m => m.toPublic());
	}
	
	/**
	 * Return the public information of the anime (= the informations to give to the client)
	 * @public
	 * @returns {PublicAnime}
	 */
	toPublic() {
		/**
		 * @type {PublicAnime}
		 */
		var lToReturn = {
			id : this.id,
			episodes : this.episodes.map(e => e.toPublic()),
			name : this.name,
			thumbnailLink : this.thumbnailLink
		};

		return lToReturn;
	}

	/**
	 * Constructor of the class
	 * @public
	 * @param {JsonObject} jsonObject 
	 * @param {string} folderPath
	 */
	constructor(jsonObject, folderPath) 
	{
		/**
		 * @ignore
		 * @type {AnimeConfig}
		 */
		let data = jsonObject.value;
		
		/**
		 * The json object of the anime. Used to store the datas in the index.json of the anime.
		 * @private
		 * @readonly
		 * @type {JsonObject}
		 */
		this.jsonObject = jsonObject;

		/**
		 * The name of the anime
		 * @public
		 * @type {string}
		 */
		this.name = data.name;
		if (!data.name) throw `"${nameof(name)}" is null in anime : `+folderPath;

		/**
		 * The uri of the anime poster
		 * @public
		 * @type {string}
		 */
		this.thumbnailLink = data.thumbnailLink;

		/**
		 * The path to the anime's folder
		 * @private
		 * @readonly
		 * @type {string}
		 */
		this._path = folderPath;
		if (!folderPath) throw `${nameof(folderPath)} is null (code exception)`;
		
		/**
		 * The list of episodes
		 * @public
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

		/**
		 * The unique id of the anime
		 * @public
		 * @readonly
		 * @type {number}
		 */
		this.id = Anime.list.length;

		Anime.list.push(this);
	}

	/**
	 * Get an anime's {@link Episode} by its id
	 * @public
	 * @param {number} episodeId
	 * @returns {(Episode|null)}
	 * @see {Episode#episodeId}
	 */
	getEpisodeById(episodeId)
	{
		for (let i = this.episodes.length - 1; i >= 0; i--) {
			let lElement = this.episodes[i];
			if (lElement.episodeId == episodeId) return lElement;
		}
		return null;
	}

	/**
	 * Update the json by generating the {@link AnimeConfig} and getting the {@link EpisodeConfig} of all its episode
	 * @public
	 * @returns {Promise<void>}
	 * @see {@link JsonObject}
	 */
	updateJson()
	{
		this.jsonObject.value = this.animeConfig;
		return this.jsonObject.save().catch( () => {console.error(`Can't save anime ${this.name}`);});
	}

	/**
	 * Return the {@link AnimeConfig} of the Anime
	 * @public
	 * @returns {AnimeConfig}
	 */
	toAnimeConfig()
	{
		/**
		 * @type {AnimeConfig}
		 */
		let animeConfig = {
			episodes: this.episodes.map((m) => {return m.toEpisodeConfig()}),
			name : this.name,
			thumbnailLink: this.thumbnailLink
		};

		return animeConfig;
	}

	/**
	 * Return the path to the anime folder
	 * @public
	 * @readonly
	 * @returns {string}
	 */
	get path() {return path.join(__root, this.path);}
}

/**
 * Store the datas of an episode
 * @public
 */
class Episode {
	/**
	 * Constructor of the class
	 * @public
	 * @param {EpisodeConfig} config 
	 * @param {Anime} anime
	 */
	constructor(config, anime) 
	{
		if (config.episodeId === null || config.episodeId === undefined) throw  `"${nameof({episodeId})}" is null in anime : `+folderPath;

		/**
		 * The name of the episode
		 * @public
		 * @type {string}
		 */
		this.name 	= config.name || "";

		/**
		 * The unique id of the episode (define the order between episodes)
		 * @public
		 * @readonly
		 * @type {number}
		 */
		this.episodeId 	= config.episodeId || -1;

		/**
		 * The uri of the episode poster
		 * @public
		 * @type {string}
		 */
		this.posterLink = config.posterLink || "";

		/**
		 * The episode's stream links
		 * @public
		 * @type {string[]}
		 */
		this.links 		= config.links;

		/**
		 * The local path to episode's file.  
		 * To set {@link Episode#localLink Episode.localLink}, see : {@link Episode#setLocalPath Episode.setLocalPath}
		 * @public
		 * @readonly
		 * @type {string}
		 */
		this.localLink 	= config.localLink || "";

		/**
		 * Reference to the {@link Anime}
		 * @public
		 * @readonly
		 * @type {Anime}
		 */
		this.anime = anime;
	}
 
	
	/**
	 * Return the public information of the episode (= the informations to give to the client)
	 * @public
	 * @returns {PublicEpisode}
	 */
	toPublic() {
		/**
		 * @type {PublicEpisode}
		 */
		var lToReturn = {
			name : this.name,
			episodeId : this.episodeId,
			posterLink : this.posterLink
		};

		return lToReturn;
	}

	/**
	 * Get the info of an episode
	 * @public
	 * @param {bool} loadYoutubeInfo Decide or not to call {@link YoutubePlayer#getInfo YoutubePlayer.getInfo}
	 * @returns {Promise<EpisodeInfo>}
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

	/**
	 * Get the first url corresponding to the {@link Videoplayer}
	 * @public
	 * @param {VideoPlayer} player 
	 * @returns {string} Return the first url corresponding to the player
	 */
	getUrlByPlayer(player)
	{
		for (let i = this.links.length - 1; i >= 0; i--) {
			let url = this.links[i];
			if (player.hasPrefix(url)) 
				return url;
		}

		return "";
	}

	/**
	 * Set {@link Episode#localLink Episode.localLink} and update the anime
	 * @public 
	 * @param {string} path 
	 * @returns {Promise<void>}
	 * @see {@link Anime#updateJson Anime.updateJson}
	 */
	setLocalPath(path)
	{
		this.localLink = path;
		return this.anime.updateJson();
	}

	/**
	 * True when ${@link Episode#localLink localLink} is set
	 * @public
	 * @type {boolean}
	 */
	get isLocal() {return Boolean(this.localLink);}

	/**
	 * True when ${@link Episode#posterLink posterLink} is set
	 * @public
	 * @type {boolean}
	 */
	get hasPoster() {return Boolean(this.posterLink);}

	/**
	 * If there is no local file, return the default local path `path.join(${@link Anime#path this.anime.path}, ${@link Episode#episodeId this.episodeId})`
	 * Else return the ${@link Episode#localLink local path}
	 * @public
	 * @type {string}
	 */
	get path() {return this.isLocal ? this.localLink : path.join(this.anime.path, `${this.episodeId}`);}

	/**
	 * Return the {@link EpisodeConfig} of the Episode
	 * @public
	 * @returns {EpisodeConfig}
	 */
	toEpisodeConfig()
	{
		/**
		 * @type {EpisodeConfig}
		 */
		let config = {
			name: this.name,
			episodeId: this.episodeId,
			posterLink: this.posterLink,
			links: this.links,
			localLink: this.localLink,
		};

		return config;
	}
}

exports.JsonObject = JsonObject;
exports.DownloadEpisode = DownloadEpisode;
exports.VideoPlayer = VideoPlayer;
exports.YoutubePlayer = YoutubePlayer;
exports.Anime = Anime;
exports.Episode = Episode;