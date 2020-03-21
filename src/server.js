const path = require("path");
const express = require("express");
const HttpStatus = require('http-status-codes');
const dataManager = require("./dataManager");

function start(port = 3000) {
	/**
	 * @constant
	 */
	let app = express();
	app.use('*', (req,res,next) =>
	{
		console.group(`[${req.method}] `+req.path);
		next();
	});

	app.get("/get/list", (req, res, next) => {
		console.log("hi");
		res.contentType("application/json");
		res.send(JSON.stringify(dataManager.Anime.publicList));

		next();
	});
	
	app.get('/get/episode', (req, res, next) => {
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

	
	let folders = ["js","html","css"];
	folders = folders.map(m => {return `/${m}/*`});
	
	app.get(folders, (req, res, next) => {
		loadAndSendFile(req, res, path.join(__root,"public",req.path));
		next();
	});

	app.use('*', (req,res,next) =>
	{
		console.groupEnd();
	});

	app.listen(port, function () {
		console.log(`App listening on port ${port}!`);
	});
};


module.exports = start;