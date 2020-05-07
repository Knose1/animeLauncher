const path = require("path");
const fs = require("fs");
const express = require("express");
const mime = require("mime-types");
const HttpStatus = require('http-status-codes');
const dataManager = require("./dataManager");
const imageWriter = require("./image/imageWriter");

let JsonObject = dataManager.JsonObject;
let DownloadEpisode = dataManager.DownloadEpisode;
let VideoPlayer = dataManager.VideoPlayer;
let YoutubePlayer = dataManager.YoutubePlayer;
let Anime = dataManager.Anime;
let Episode = dataManager.Episode;

/**
 * Start the server  
 *   
 * ------------------  
 * Server links :  
 * [USE] `*` - Used to do consoleGroup  
 * <br/>  
 * [GET] `/get/list` - Get the anime list  
 * &ensp;&ensp;&ensp;Send : {@link Anime.publicList Anime.publicList}  
 * <br/>  
 * [GET] `/get/episode/info?` - Get the info of an episode  
 * &ensp;&ensp;&ensp;Param : `animeId` - The id of the anime  
 * &ensp;&ensp;&ensp;Param : `episodeId` - The id of the episode in the anime  
 * &ensp;&ensp;&ensp;Send : {@link EpisodeInfo}  
 * <br/>  
 * [GET] `/get/episode/download?` - Download an episode  
 * &ensp;&ensp;&ensp;Param : `animeId`  
 * &ensp;&ensp;&ensp;Param : `episodeId`  
 * &ensp;&ensp;&ensp;Param : `videoPlayerId`  
 * &ensp;&ensp;&ensp;Param : `format`  
 * &ensp;&ensp;&ensp;Param : `url`  
 * &ensp;&ensp;&ensp;Send : {"progress":{@link DownloadEpisode#progress DownloadEpisode.progress}}  
 * <br/>
 * [GET] `/get/list/download` - Get download list
 * &ensp;&ensp;&ensp;Send : {
 * &ensp;&ensp;&ensp;&ensp;"current": {
 * &ensp;&ensp;&ensp;&ensp;&ensp;"progress":{@link DownloadEpisode#progress DownloadEpisode.progress}
 * &ensp;&ensp;&ensp;&ensp;&ensp;"episode": Episode's name
 * &ensp;&ensp;&ensp;&ensp;},
 * &ensp;&ensp;&ensp;&ensp;"list": [
 * &ensp;&ensp;&ensp;&ensp;&ensp;"episode": Episode's name
 * &ensp;&ensp;&ensp;&ensp;]
 * &ensp;&ensp;&ensp;}  
 * <br/>  
 * [GET] `/` - Index.html  
 * <br/>  
 * [GET] `/js/*` - Folder js  
 * <br/>  
 * [GET] `/html/*` - Folder html  
 * <br/>  
 * [GET] `/css/*` - Folder css  
 * <br/>  
 * [GET] `/fonts/*` - Folder fonts  
 * <br/>  
 * [GET] `/asset/ico/*` - Folder assets ico  
 * <br/>  
 * [GET] `/episode/:animeId/:episodeId` - Get a local episode in folder episode  
 * &ensp;&ensp;&ensp;Param : `animeId` - The id of the anime  
 * &ensp;&ensp;&ensp;Param : `episodeId` - The id of the episode in the anime  
 * <br/>  
 * [GET] `/asset/thumbnail/:text.png` - Generate an image  
 * &ensp;&ensp;&ensp;Param : `text` - The text to show on the image  
 * &ensp;&ensp;&ensp;Param : `width` - The image width  
 * &ensp;&ensp;&ensp;Param : `height` - The image height  
 * &ensp;&ensp;&ensp;Param : `textSize` - The text size  
 * &ensp;&ensp;&ensp;Param : `backgroundColor` - The background color  
 * &ensp;&ensp;&ensp;Param : `textColor` - The text color  
 * 
 * @protected
 * @namespace server
 * @param {number} port - An integer for the server port
 */
function start(port = 3000) {
	/**
	 * @constant
	 */
	let app = express();
	
	
	
	
	app.use('*', (req,res,next) =>
	{
		console.group(`[${req.method}] `+(req.baseUrl || "/"));
		next();

		res.once("close", () => {
			console.groupEnd();
		});
	});




	//*///////////////////////////////*//
	//*            Get List           *//
	//*///////////////////////////////*//
	app.get('/get/list', (req, res, next) => {
		res.contentType("application/json");
		res.send(JSON.stringify(Anime.publicList));
	});
	
	//*///////////////////////////////*//
	//*        Get Episode Info       *//
	//*///////////////////////////////*//
	function tryToGetEpisodeOrSendStatus(res, animeId, episodeId)
	{
		//Arguments checking
		if (!Number.isSafeInteger(animeId) || !Number.isSafeInteger(episodeId)) {
			
			console.log("[Missing Argument(s)]");
			res.sendStatus(HttpStatus.BAD_REQUEST);
			return;
		}

		//Anime finding
		let lAnime = Anime.list[animeId]
		if (!lAnime) {
			console.log("[Anime not found]");
			res.sendStatus(HttpStatus.NOT_FOUND);
			return;
		}

		//Episode finding
		let lEpisode = lAnime.getEpisodeById(episodeId);
		if (!lEpisode) {
			console.log("[Episode not found]");
			res.sendStatus(HttpStatus.NOT_FOUND);
			return;
		}

		return lEpisode
	}

	app.get('/get/episode/info', async (req, res, next) => {
		
		let animeId = Number.parseInt(req.query.animeId);
		let episodeId = Number.parseInt(req.query.episodeId);
		let loadYtInfo = req.query.loadYtInfo;

		try {
			loadYtInfo = JSON.parse(loadYtInfo);
			if (typeof(loadYtInfo) !== "boolean") 
			{
				loadYtInfo = true;
			}
		}
		catch(e)
		{
			loadYtInfo = true;
		}

		console.log("?animeId = "+animeId);
		console.log("?episodeId = "+episodeId);
		console.log("?loadYtInfo = "+loadYtInfo);
		
		let lEpisode = tryToGetEpisodeOrSendStatus(res, animeId, episodeId);
		if (!lEpisode) return;
		
		//Get episode info and send
		try {
			let info = await lEpisode.getInfo(loadYtInfo);

			res.contentType("application/json");
			res.send(JSON.stringify(info));
		}
		catch(e)
		{
			console.log(e);
			res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	});
	

	//*///////////////////////////////*//
	//*        Download Episode       *//
	//*///////////////////////////////*//
	app.get('/get/episode/download', async (req, res, next) => {
		let animeId;
		let episodeId;
		let videoPlayerId;
		let format;
		let url;

		try {
			animeId = Number.parseInt(req.query.animeId);
			episodeId = Number.parseInt(req.query.episodeId);
			videoPlayerId = Number.parseInt(req.query.videoPlayerId);
			format = req.query.format ? JSON.parse(req.query.format) : null;
			url = req.query.url;
		}
		catch(e)
		{
			console.error(e);
			res.sendStatus(HttpStatus.BAD_REQUEST);
			return;
		}

		console.log("?animeId = "+animeId);
		console.log("?episodeId = "+episodeId);
		console.log("?videoPlayerId = "+videoPlayerId);
		console.log("?ytFormat = "+JSON.stringify(format));
		console.log("?url = "+url);
		
		let lEpisode = tryToGetEpisodeOrSendStatus(res, animeId, episodeId);
		
		if (lEpisode.isLocal) 
		{
			//console.log("[Redirect] "+req.hostname+`/episode/${animeId}/${episodeid}`);
			//res.redirect(req.hostname+`/episode/${animeId}/${episodeid}`);
			res.sendStatus(HttpStatus.CONFLICT);
			return;
		}

		let download = DownloadEpisode.getFromEpisode(lEpisode) || new DownloadEpisode(lEpisode, videoPlayerId);
		if (!download.isDownloading && !download.isPending) download.download(url, format);

		//Episode
		res.send(JSON.stringify({progress:(download.progress || 0)}));
	});

	//*///////////////////////////////*//
	//*         Download List         *//
	//*///////////////////////////////*//
	app.get('/get/list/download', async (req, res, next) => {
		
		let downloads = DownloadEpisode.list;

		let currentDlEpisode = DownloadEpisode.currentDownload.episode;

		//Episode
		res.send(JSON.stringify({
			current: {
				progress: DownloadEpisode.currentDownload.progress,
				episode: currentDlEpisode.anime.name + " - " + (currentDlEpisode.name || currentDlEpisode.episodeId)
			},
			list : downloads.map( (d) => {
				let e = d.episode;
				return e.anime.name + " - " + (e.name || e.episodeId);
			})
		}));
	});


	function loadAndSendFile(req,res,filePath)
	{
		console.log("[File path] "+filePath);

		res.sendFile(filePath), (err) => {
			if (err) console.error(err);
		};
	}

	//*///////////////////////////////*//
	//*           Index.html          *//
	//*///////////////////////////////*//
	app.get('/', (req, res, next) => {
		loadAndSendFile(req, res, path.join(__root,"public","index.html"));
	});

	
	//*///////////////////////////////*//
	//*         Public Folder         *//
	//*///////////////////////////////*//
	let folders = ["js","html","css", "fonts", "asset/ico"];
	folders = folders.map(m => {return `/${m}/*`});
	
	app.get(folders, (req, res, next) => {
		loadAndSendFile(req, res, path.join(__root,"public",req.path));
	});

	//*///////////////////////////////*//
	//*       Get Local Episode       *//
	//*///////////////////////////////*//
	app.get("/episode/:animeId/:episodeId", (req, res, next) => {
		let animeId = Number.parseInt(req.params.animeId);
		let episodeId = Number.parseInt(req.params.episodeId);

		console.log(":animeId = "+animeId);
		console.log(":episodeId = "+episodeId);

		let episode = tryToGetEpisodeOrSendStatus(res, animeId, episodeId);
		loadAndSendFile(req, res, episode.path);
	});

	//*///////////////////////////////*//
	//*           Thumbnail           *//
	//*///////////////////////////////*//
	app.get("/asset/thumbnail/:text.png", async (req, res, next) => {
		let width 			= Number.parseInt	(req.query.width);
		let height 			= Number.parseInt	(req.query.height);
		let textSize 		= Number.parseFloat	(req.query.textSize);
		let backgroundColor = req.query.backgroundColor;
		let textColor 		= req.query.textColor;

		/**
		 * @type {imageWriter.ThumbailOption}
		 */
		let options = {};
		if (Number.isSafeInteger(width))	options.width = width;
		if (Number.isSafeInteger(height))	options.height = height;
		if (!Number.isNaN(textSize)) 		options.textSize = textSize;
		if (backgroundColor) 				options.backgroundColor = backgroundColor;
		if (textColor) 						options.textColor = textColor;

		if (width > 2000 || width <= 0) options.width = null;
		if (height > 2000 || height <= 0) options.height = null;
		
		let filePath;
		try {
			filePath = await imageWriter.getThumbail(req.params.text, options)
		}
		catch(e)
		{
			console.log(e);
			res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
			return;
		}
		res.sendFile(filePath, (e) => {
			if (e) {
				console.error(e);
				return;
			}
			console.log(`Removing temp file at path \"${filePath}\"...`);
			fs.unlink(filePath, (err) => {
				console.log(`Removed temp file`);
				if (err) console.error(err);
			});
		});
	});




	app.listen(port, function () {
		console.log(`App listening on port ${port}!`);
	});
};


module.exports = start;