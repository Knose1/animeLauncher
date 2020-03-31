const path = require("path");
const fs = require("fs");
const express = require("express");
const mime = require("mime-types");
const HttpStatus = require('http-status-codes');
const dataManager = require("./dataManager");
const imageWriter = require("./imageWriter");

let JsonObject = dataManager.JsonObject;
let DownloadEpisode = dataManager.DownloadEpisode;
let VideoPlayer = dataManager.VideoPlayer;
let YoutubePlayer = dataManager.YoutubePlayer;
let Anime = dataManager.Anime;
let Episode = dataManager.Episode;

function start(port = 3000) {
	/**
	 * @constant
	 */
	let app = express();
	
	
	
	
	app.use('*', (req,res,next) =>
	{
		console.group(`[${req.method}] `+(req.baseUrl || "/"));
		next();

		res.on("finish", () => {
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

		console.log("?animeId = "+animeId);
		console.log("?episodeId = "+episodeId);
		
		let lEpisode = tryToGetEpisodeOrSendStatus(res, animeId, episodeId);
		if (!lEpisode) return;
		
		//Get episode info and send
		try {
			let info = await lEpisode.getInfo();

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
	app.post('/post/episode/download', async (req, res, next) => {
		let animeId = Number.parseInt(req.body.animeId);
		let episodeId = Number.parseInt(req.body.episodeId);
		let videoPlayerId = Number.parseInt(req.body.videoPlayerId);
		let ytFormat = req.body.ytInfo ? JSON.parse(req.body.ytInfo) : null;
		let url = req.body.url;

		console.log("?animeId = "+animeId);
		console.log("?episodeId = "+episodeId);
		console.log("?videoPlayerId = "+videoPlayerId);
		
		let lEpisode = tryToGetEpisodeOrSendStatus(res, animeId, episodeId);
		
		if (lEpisode.isLocal) 
		{
			res.sendStatus(HttpStatus.CONFLICT);
			return;
		}


		let download = DownloadEpisode.getFromEpisode(lEpisode) || new DownloadEpisode(lEpisode);
		if (!download.isDownloading) download.download(url, ytFormat);

		//Episode
		res.sendStatus(HttpStatus.PROCESSING);
		res.send(JSON.stringify({progress:download.progress}));
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
		let textSize = Number.parseFloat(req.query.textSize);
		let filePath = textSize ? 
			await imageWriter.getThumbail(req.params.text, textSize) : 
			await imageWriter.getThumbail(req.params.text);

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