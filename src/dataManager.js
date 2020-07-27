/**
 * @namespace data.config
 * @typedef VideoPlayerConfig
 * @property {string} name
 * @property {string[]} prefix
 * @property {boolean} downloadable
 * @property {boolean} autoDownload
 * @property {boolean} isNatif 
 * @property {boolean} isYoutube
 */

/**
 * @namespace data.public
 * @typedef {Object} PublicVideoPlayer
 * @property {string} name
 * @property {boolean} isNatif
 * @property {boolean} downloadable
 * @property {boolean} autoDownload
 * @property {number} id
 * id: this.id
 */ 
/**
 * @namespace data.public
 * @typedef {Object} PlayerInfo
 * @property {string} url
 * @property {string} [ytInfo]
 * @property {boolean} [isYoutube]
 * @property {PublicVideoPlayer} player
 */

 /*-****************************-*/

/**
 * @namespace data.config
 * @typedef AnimeConfig
 * @property {string} name
 * @property {string} [thumbnailLink]
 * @property {EpisodeConfig[]} episodes
 */

/**
 * @namespace data.public
 * @typedef PublicAnime
 * @property {number} id
 * @property {PublicEpisode} episodes
 * @property {string} name
 * @property {string} thumbnailLink
 */

/*-*****************************-*/

/**
 * @namespace data.config
 * @typedef EpisodeConfig
 * @property {string} [name]
 * @property {number} episodeId
 * @property {string} [posterLink]
 * @property {string[]} links
 * @property {string} [localLink]
 */
/**
 * @namespace data.public
 * @typedef PublicEpisode 
 * @property {string} name The name of the episode
 * @property {number} animeId The unique id of the anime
 * @property {number} episodeId The unique id of the episode (define the order between episodes)
 * @property {string} posterLink The uri of the anime poster
 */
/**
 * @namespace data.public
 * @typedef {Object} EpisodeInfo
 * @property {string} name
 * @property {number} episodeId
 * @property {string} posterLink
 * @property {bool} isLocal
 * @property {bool} hasPoster
 * @property {PlayerInfo[]} players
 */

/**
 * @namespace data
 * @typedef ReqDownloadData
 * @property {number} progress The download progress in %
 * @property {string} contentType
 * @property {string} fileName
 */

/** */

const http = require('http');
const https = require('https');
var fs = require('fs');
var ytdl = require('ytdl-core');
const pathNode = require("path");
const mime = require("mime-types");
const event = require("events");
const { error } = require('console');
const EventEmitter = event.EventEmitter;

/**
 * Load and save a json file
 * @public
 */
class JsonObject {
	/**
	 * @public
	 * @param {string} path
	 */
	constructor(path)
	{
		this.path = path;
		this.value = {};
	}
	
	/**
	 * @public
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
	 * @public
	 * @returns {Promise<void>}
	 */
	save()
	{
		console.newLine();
		console.log("Saving "+this.path);

		return new Promise((resolve, reject) => {
			var data = JSON.stringify(this.value, "", "\t");//add tabs to make it more readable

			fs.writeFile(this.path, data, (err) => {
				if (err) {
					console.log(`There has been an error saving your file "${this.path}".`);
					console.log(err.message);
					reject(err);
					return;
				}

				console.log("Saved "+this.path);
				resolve();
			});
		});
	}
}

/**
 * A class used to handle the events of {@link VideoPlayer#download VideoPlayer.download}.  
 * Ensure that there's only one download max by episode
 * @public
 */
class DownloadEpisode 
{

	/**
	 * @public
	 * @readonly
	 * @type {DownloadEpisode[]}
	 */
	static get list() {return DownloadEpisode._list || (DownloadEpisode._list = [])}
	
	/**
	 * @typedef ToDownloadItem
	 * @property {Function} func
	 * @property {DownloadEpisode} downloadEpisode
	 * @memberof DownloadEpisode
	 * @public
	 */

	/**
	 * @public
	 * @type {ToDownloadItem[]}
	 */
	static get toDownload() {return DownloadEpisode._toDownload || (DownloadEpisode._toDownload = [])}
	
	/**
	 * @public get
	 * @protected set
	 * @type {DownloadEpisode}
	 */
	static get currentDownload() {return DownloadEpisode._currentDownload || null}
	static set currentDownload(value) {return DownloadEpisode._currentDownload = value}
	
	/**
	 * Constructor of the class
	 * @param {Episode} episode
	 * @param {number} videoPlayerId
	 * @see {@link Videoplayer#id}
	 */
	constructor(episode, videoPlayerId)
	{
		/**
		 * The episode we want to download
		 * @public
		 * @readonly
		 * @type {Episode}
		 */
		this.episode = episode;

		/**
		 * The unique id of the DownloadEpisode instance
		 * @public
		 * @readonly
		 * @type {number}
		 */
		this.id = DownloadEpisode.list.length;

		/**
		 * The player used to download the video (epsode)
		 * @private
		 * @readonly
		 * @type {VideoPlayer}
		 */
		this.player = VideoPlayer.getVideoPlayerById(videoPlayerId);
		
		/**
		 * If the download is done and the json saved
		 * @private
		 * @readonly
		 * @type {boolean}
		 * @see {@link DownloadEpisode#download}, {@link DownloadEpisode#_setLocalPath}
		 */
		this.isReady = false;

		/**
		 * If the download is pending
		 * @public
		 * @readonly
		 * @type {boolean}
		 */
		this.isPending = false;

		/**
		 * If the download is ongoing
		 * @public
		 * @readonly
		 * @type {boolean}
		 */
		this.isDownloading = false;

		/**
		 * If there is an error
		 * @public
		 * @readonly
		 * @type {boolean}
		 */
		this.isError = false;

		/**
		 * The error
		 * @public
		 * @readonly
		 * @type {string}
		 */
		this.error = "";

		/**
		 * The progress of the download
		 * @public
		 * @readonly
		 * @type {number}
		 */
		this.progress = 0;

		if (!this.player.downloadable) throw "The episode is not downloadable";

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
		this.episode.setLocalPath(pathToFile.replace(/^.*(\\|\/)episode(\\|\/).*(\\|\/)/, ""))
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
		if (this.isDownloading) 
		{
			console.error(`${nameof({DownloadEpisode})} is downloading`);
		}

		if (DownloadEpisode.currentDownload === null) 
		{
			DownloadEpisode.toDownload.shift();

			this.isPending = false;
			this.isDownloading = true;
			DownloadEpisode.currentDownload = this;

			let emitter = this.player.download((this.player.autoDownload ? this.episode.getUrlByPlayer(this.player) : url ) , format, this.episode.path);	
			if (emitter == null) 
			{
				DownloadEpisode.currentDownload = null;
				this.isDownloading = false;
				if (DownloadEpisode.toDownload.length > 0) DownloadEpisode.toDownload[0].func();
				return;
			}

			this._setEvents(emitter);
		}
		else if (!this.isPending)
		{
			this.isPending = true;
	
			DownloadEpisode.toDownload.push(
				{
					func : this.download.bind(this, url, format),
					downloadEpisode : this
				}
			);
		}

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
			DownloadEpisode.currentDownload = null;
			
			this.destroy();

			if (DownloadEpisode.toDownload.length > 0) DownloadEpisode.toDownload[0].func();
		})

		.on('error',
		/**
		 * @param {string} err
		 */
		(err) => {
			DownloadEpisode.currentDownload = null;
			this.isDownloading = false;
			this.isError = true;
			this.error = err;
			console.error(err);
			
			if (DownloadEpisode.toDownload.length > 0) DownloadEpisode.toDownload[0].func();
		});
	}

	/**
	 * Destroy the instance (Removes it from {@link DownloadEpisode#list DownloadEpisode.list}.)
	 * @public
	 */
	destroy()
	{
		DownloadEpisode.list.splice( DownloadEpisode.list.indexOf(this), 1);
	}

	/**
	 * 
	 * @param {Episode} episode 
	 */
	static getFromEpisode(episode)
	{
		for (let i = DownloadEpisode.list.length - 1; i >= 0; i--) {
			let lElement = DownloadEpisode.list[i];

			if (lElement.episode == episode) return lElement;
		}

		return null;
	}
}

/**
 * A class used to download a video.
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
		/**
		 * The name of the videoPlayer
		 * @public
		 * @readonly
		 * @type {string}
		 */
		this.name = config.name

		/**
		 * If true, the VideoPlayer wront be available for edit
		 * @public
		 * @readonly
		 * @type {boolean}
		 */
		this.isNatif = config.isNatif;

		/**
		 * The prefix(s) for matching the url
		 * @public
		 * @type {string[]}
		 * @see {@link Videoplayer#getPlayer}, {@link Videoplayer#hasPrefix}
		 */
		this.prefix  = config.prefix;

		/**
		 * Tell if the server can download
		 * @public
		 * @type {boolean}
		 */
		this.downloadable = config.downloadable;

		/**
		 * Tell if the url used for downloading is an url in {@link Episode#links Episode.links} 
		 * @public
		 * @type {boolean}
		 */
		this.autoDownload = config.autoDownload;

		/**
		 * The unique id of the videoPlayer
		 * @public
		 * @readonly
		 */
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

		try {
			var url = new URL(downloadUrl);
		}
		catch(_) 
		{
			return null;
		}

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
		
		/**
		 * @type {http.ClientRequest || https.ClientRequest}
		 */
		let request = null;

		switch (url.protocol) {
			case "http:":
				request = http.get(downloadUrl, options);
				break;
			
			case "https:":
				request = https.get(downloadUrl, options);
				break;
		
			default:
				setTimeout( () => {
					this._dispatchOnError(emitter, "Protocol not supported");
				}, 1000 );
				return;
		}


		request.setTimeout(30000, async () => {
			request.abort();

			file.close();
			// Delete the file async. (But we don't check the result)
			fs.unlink(fileName, () => {
				this._dispatchOnError(emitter, "[Request Timeout] "+fileName);
			}); 
		});

		request.on("response", async (response) => {
			
			let len = parseInt(response.headers['content-length'], 10);
			let downloaded = 0;
			let contentType = response.headers["content-type"];

			//Init the file with the response extension
			if (file === null) {
				fileName = `${fileName}.${mime.extension(contentType)}`;
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
				file.close();
				if (!response.complete) 
				{
					let err = 'The connection was terminated while the message was still being sent';
					console.error(err);
					//this._dispatchOnError(emitter, err);
					return;
				}

				this._dispatchOnComplete(emitter, {progress:100, contentType, fileName});  
			});
		})
		// Handle errors
		.on('error', async (err) => {
			file.close();

			// Delete the file async. (But we don't check the result)
			fs.unlink(fileName, () => {
				this._dispatchOnError(emitter, err.message);
			});  
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
 * A class used to download a youtube video. It also get the video info.
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

		let extension = mime.extension(format.mimeType) || "";
		
		let path = localFileWithoutExtension+"."+extension;

		let video = ytdl(downloadUrl, {format: format} );
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
		stream.on('finish', async () => {
			await stream.close();
			this._dispatchOnComplete(emitter, { progress: 100, contentType:format.mimeType, fileName: path });
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
				this.episodes.push(new Episode(lElement, this));
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
		this.jsonObject.value = this.toAnimeConfig();
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
			episodes: this.episodes.map((m) => {return m.toEpisodeConfig()})
		};
		
		if(this.name) 			animeConfig.name = this.name;
		if(this.thumbnailLink) 	animeConfig.thumbnailLink = this.thumbnailLink;

		return animeConfig;
	}

	/**
	 * Return the path to the anime folder
	 * @public
	 * @readonly
	 * @returns {string}
	 */
	get path() 
	{
		return this._path;
	}
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
			animeId : this.anime.id,
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
			if (!videoPlayer) continue;

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
	 * path.join(${@link Anime#path this.anime.path} with :
	 * 
	 * If there is no local file, use the default local path ${@link Episode#episodeId this.episodeId})`
	 * Else use the ${@link Episode#localLink local path}
	 * @public
	 * @type {string}
	 */
	get path() 
	{
		let animePath = this.anime.path;

		return pathNode.join(animePath, (this.isLocal ? this.localLink : `ep${this.episodeId}`));
	}

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
		let config = {};

		if(this.name) 		config.name = this.name;
		if(this.episodeId) 	config.episodeId = this.episodeId;
		if(this.posterLink) 	config.posterLink = this.posterLink;
		if(this.links) 		config.links = this.links;
		if(this.localLink) 	config.localLink = this.localLink;

		return config;
	}
}

exports.JsonObject = JsonObject;
exports.DownloadEpisode = DownloadEpisode;
exports.VideoPlayer = VideoPlayer;
exports.YoutubePlayer = YoutubePlayer;
exports.Anime = Anime;
exports.Episode = Episode;