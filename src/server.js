const path = require("path");
const express = require("express");
const HttpStatus = require('http-status-codes');
const dataManager = require("./dataManager");

function start(port = 3000) {
	/**
	 * @constant
	 */
	let app = express();

	app.get("/get/list", (req, res) => {
		console.log("hi");
		res.contentType("application/json");
		res.send(JSON.stringify(dataManager.Anime.publicList));
	});
	
	app.get('/get/episode', (req, res) => {
		console.group('/get/episode');
		console.log("anime: "+req.query.animeName);
		console.log("episodeId: "+req.query.episodeId);
		console.groupEnd();

		res.sendStatus(HttpStatus.NOT_IMPLEMENTED);
	})

	//*///////////////////////////////*//
	//*         Public Folder         *//
	//*///////////////////////////////*//
	function loadAndSendFile(req,res,filePath)
	{
		console.group("[GET] "+req.path);
		console.log("[File path] "+filePath);

		res.sendFile(filePath), (err) => {
			if (err) console.error(err);
		};
		console.groupEnd();
	}

	app.get('/', (req, res) => {
		loadAndSendFile(req,res,path.join(__root,"public","index.html"));
	});

	
	let folders = ["js","html","css"];
	folders.map(m => {return `/${m}/*`});

	app.get(folders, (req, res) => {
		loadAndSendFile(req,res,path.join(__root,"public",req.path));
	});



	app.listen(port, function () {
		console.log(`App listening on port ${port}!`);
	});
};


module.exports = start;