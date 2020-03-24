const path = require("path");
const fs = require("fs");
const express = require("express");
const mime = require("mime-types");
const HttpStatus = require('http-status-codes');
const dataManager = require("./dataManager");
const imageWriter = require("./imageWriter");

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
		res.send(JSON.stringify(dataManager.Anime.publicList));
	});
	

	//*///////////////////////////////*//
	//*        Download Episode       *//
	//*///////////////////////////////*//
	app.get('/get/episode/download', (req, res, next) => {
		res.sendStatus(HttpStatus.NOT_IMPLEMENTED);
	});


	//*///////////////////////////////*//
	//*        Get Episode Info       *//
	//*///////////////////////////////*//
	app.get('/get/episode/info', async (req, res, next) => {
		
		let animeId = Number.parseInt(req.query.animeId);
		let episodeId = Number.parseInt(req.query.episodeId);

		console.log("?animeId = "+animeId);
		console.log("?episodeId = "+episodeId);
		
		if (!Number.isSafeInteger(animeId) || !Number.isSafeInteger(episodeId)) {
			
			console.log("[Missing Argument(s)]");
			res.sendStatus(HttpStatus.BAD_REQUEST);
			return;
		}

		let lEpisode = dataManager.Anime.list[animeId].getEpisodeById(episodeId);
		if (!lEpisode) {
			console.log("[Episode not found]");
			res.sendStatus(HttpStatus.NOT_FOUND);
			return;
		}
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