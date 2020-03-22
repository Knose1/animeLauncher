const path = require("path");
const fs = require("fs");
const express = require("express");
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
	});

	app.get("/get/list", (req, res, next) => {
		res.contentType("application/json");
		res.send(JSON.stringify(dataManager.Anime.publicList));

		next();
	});
	
	app.get('/get/episodeInfo', (req, res, next) => {
		console.group('/get/episode');
		console.log("anime: "+req.query.animeName);
		console.log("episodeId: "+req.query.episodeId);
		console.groupEnd();


		res.sendStatus(HttpStatus.NOT_IMPLEMENTED);
		next();
	});

	//*///////////////////////////////*//
	//*         Public Folder         *//
	//*///////////////////////////////*//
	function loadAndSendFile(req,res,filePath)
	{
		console.log("[File path] "+filePath);

		res.sendFile(filePath), (err) => {
			if (err) console.error(err);
		};
	}

	
	app.get('/', (req, res, next) => {
		loadAndSendFile(req, res, path.join(__root,"public","index.html"));
		next();
	});

	
	let folders = ["js","html","css", "fonts", "asset/ico"];
	folders = folders.map(m => {return `/${m}/*`});
	
	app.get(folders, (req, res, next) => {
		loadAndSendFile(req, res, path.join(__root,"public",req.path));
		next();
	});

	app.get("/asset/thumbnail/:text.png", async (req, res, next) => {
		let textSize = Number.parseFloat(req.query.textSize);
		let filePath = textSize ? 
			await imageWriter.getThumbail(req.params.text, textSize) : 
			await imageWriter.getThumbail(req.params.text);

		res.sendFile(filePath, (e) => {
			if (e) {
				console.error(e);
				next();
				return;
			}
			console.log(`Removing temp file at path \"${filePath}\"...`);
			fs.unlink(filePath, (err) => {
				console.log(`Removed temp file`);
				if (err) console.error(err);
				next();
			});
		});
	});

	app.use('*', (req,res,next) =>
	{
		console.groupEnd();
		next();
	});

	app.listen(port, function () {
		console.log(`App listening on port ${port}!`);
	});
};


module.exports = start;