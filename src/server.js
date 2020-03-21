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
	loadAndSendFile(req,res,filePath)
	{
		console.group("[GET] "+req.path);
		console.log("File path :"+filePath);

		res.sendFile(filePath), (err) => {
			if (err) console.error(err);
		};
		console.groupEnd();
	}

	app.get('/', (req, res) => {
		loadAndSendFile(path.join(_root,"public","index.html"));
	});
	app.get('/js/:path', (req, res) => {
		loadAndSendFile(path.join(__root,"public","js",req.params.path));
	});
	app.get('/css/:path', (req, res) => {
		loadAndSendFile(path.join(__root,"public","css",req.params.path));
	});
	app.get('/html/:path', (req, res) => {
		loadAndSendFile(path.join(__root,"public","html",req.params.path));
	});



	app.listen(port, function () {
		console.log(`App listening on port ${port}!`);
	});
};


module.exports = start;