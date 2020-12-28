const path = require("path");
const fs = require("fs");
const express = require("express");
const mime = require("mime-types");
const HttpStatus = require('http-status-codes');
const dataManager = require("./dataManager");
const imageWriter = require("./image/imageWriter");


const ANIME_FOLDER = "episode";
const ACCOUNT_FOLDER = "accounts";
const JSON_ANIME = "index.json";

let JsonObject = dataManager.JsonObject;
let DownloadEpisode = dataManager.DownloadEpisode;
let VideoPlayer = dataManager.VideoPlayer;
let YoutubePlayer = dataManager.YoutubePlayer;
let Anime = dataManager.Anime;
let Account = dataManager.Account;
let Episode = dataManager.Episode;

/**
 * Start the server  
 *   
 * ------------------  
 * Server links :  
 * [USE] `*` - Used to do consoleGroup  
 * <br/><br/>  
 * [GET] `/new/anime?` - Add a new anime  
 * &ensp;&ensp;&ensp;Param : `name` - The name of the anime  
 * &ensp;&ensp;&ensp;Param : `thumbnailLink` - The path to the thumbnail  
 * &ensp;&ensp;&ensp;Send : {"id":Anime Id}  
 * <br/>  
 * [GET] `/new/episode?` - Add a new episode to an anime  
 * &ensp;&ensp;&ensp;Send : {"id":Anime Id}  
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
 * <code class="prettyprint source language-json code-toolbar pre">
 * Send: {  
 * &ensp;&ensp;&ensp;"current": {  
 * &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"progress":{@link DownloadEpisode#progress DownloadEpisode.progress}  
 * &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"episode": Episode's name  
 * &ensp;&ensp;&ensp;},  
 * &ensp;&ensp;&ensp;"list": [  
 * &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Episodes's name  
 * &ensp;&ensp;&ensp;],  
 * &ensp;&ensp;&ensp;"error": [  
 * &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{  
 * &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"episode": Episode's name  
 * &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;"error": Error  
 * &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;}  
 * &ensp;&ensp;&ensp;]  
 * }
 * </code>
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
 * [GET] `/asset/thumbnail/:text.png` - Generate an image or return a generated image
 * &ensp;&ensp;&ensp;Param : `text` - The text to show on the image  
 * &ensp;&ensp;&ensp;Param : `width` - The image width  
 * &ensp;&ensp;&ensp;Param : `height` - The image height  
 * &ensp;&ensp;&ensp;Param : `textSize` - The text size  
 * &ensp;&ensp;&ensp;Param : `backgroundColor` - The background color  
 * &ensp;&ensp;&ensp;Param : `textColor` - The text color  
 * @protected
 * @memberof server.https
 * @param {Config} config
*/
function start(config)
{
	/**
	 * @constant
	 */
	let app = express();
	const cors = require('cors');
	app.use(cors());

	/**
	 * @type {number}
	 */
	let port = config.port;


	app.use('*', (req, res, next) =>
	{
		console.group(`[${req.method}] ` + (req.baseUrl || "/"));
		next();

		res.once("close", () =>
		{
			console.groupEnd();
		});
	});

	//*///////////////////////////////*//
	//*         Remove Account        *//
	//*///////////////////////////////*//
	app.get('/remove/account', (req, res, next) =>
	{
		let name = req.query.name;
		let account = Account.getAccountByName(name);

		if (!account) 
		{
			res.sendStatus(HttpStatus.BAD_REQUEST);
			return;
		}

		account.destroy();
		res.sendStatus(HttpStatus.OK);
	});

	//*///////////////////////////////*//
	//*          New Account          *//
	//*///////////////////////////////*//
	app.get('/new/account', (req, res, next) =>
	{
		let name = req.query.name;
		//let animeThumbnailLink = req.query.password;

		let accountData = { "name": name, "seen": {} }

		let fileName = global.toFileName(name, "-").replace(/\ /g, "_");
		let accountJSONFile = path.join(__root, ACCOUNT_FOLDER, fileName + ".json");

		if (fs.existsSync(accountJSONFile)) 
		{
			res.sendStatus(HttpStatus.CONFLICT);
			return;
		}
		fs.writeFile(accountJSONFile, JSON.stringify(accountData), () =>
		{
			let jsonObj = new JsonObject(accountJSONFile);
			jsonObj.value = accountData;

			let account = new Account(jsonObj, accountJSONFile);
			res.send(JSON.stringify({ 'id': account.id }));
		});
	});

	//*///////////////////////////////*//
	//*           New Anime           *//
	//*///////////////////////////////*//
	app.get('/new/anime', (req, res, next) =>
	{
		let animeName = req.query.name;
		let animeThumbnailLink = req.query.thumbnailLink;

		/**
		 * @ignore
		 * @type {server.data.config.AnimeConfig}
		 */
		let animeData = { "name": animeName, "episodes": [] }
		if (animeThumbnailLink) 
		{
			animeData.thumbnailLink = animeThumbnailLink;
		}

		let animeFolderName = global.toFileName(req.name.animeName, "-").replace(/\ /g, "_");
		let animeFolder = path.join(__root, ANIME_FOLDER, animeFolderName);
		let jsonFile = path.join(animeFolderName, JSON_ANIME);

		if (fs.existsSync(jsonFile)) 
		{
			res.sendStatus(HttpStatus.CONFLICT);
			return;
		}

		fs.mkdir(animeFolderName, () =>
		{
			fs.writeFile(jsonFile, JSON.stringify(animeData), () =>
			{
				let jsonObj = new JsonObject(jsonFile);
				jsonObj.value = animeData;

				let anime = new Anime(jsonObj, animeFolder);
				res.send(JSON.stringify({ 'id': anime.id }));
			});
		});
	});

	//*///////////////////////////////*//
	//*          New Episode          *//
	//*///////////////////////////////*//
	app.get('/new/episode', (req, res, next) =>
	{
		let animeId = req.query.animeId;
		let episodeName = req.query.name;
		let posterLink = req.query.posterLink;

		let anime = tryToGetAnimeOrSendStatus(animeId);
		if (!anime) return;

		/**
		 * @type {server.data.config.EpisodeConfig}
		 */
		let epConfig = { "episodeId": anime.episodes.length, "links": [], "name": episodeName, "posterLink": posterLink };
		let ep = new Episode(epConfig, anime);

		anime.episodes.push(ep);

		anime.saveJson();
		
		res.send(JSON.stringify({ 'id': ep.episodeId }));
	});




	//*///////////////////////////////*//
	//*           Get Account         *//
	//*///////////////////////////////*//
	app.get('/get/accounts', (req, res, next) =>
	{
		let toSend = [];
		for (let i = Account.list.length - 1; i >= 0; i--)
		{
			/**
			 * @ignore
			 * @type {dataManager.Account}
			 */
			let lElement = Account.list[i];
			toSend.push(lElement.name);
		}

		res.send(toSend);
	});

	//*///////////////////////////////*//
	//*            Get List           *//
	//*///////////////////////////////*//
	app.get('/get/list', (req, res, next) =>
	{
		res.contentType("application/json");
		res.send(JSON.stringify(Anime.publicList));
	});

	//*///////////////////////////////*//
	//*        Get Episode Info       *//
	//*///////////////////////////////*//
	function tryToGetAnimeOrSendStatus(res, animeId)
	{
		//Arguments checking
		if (!Number.isSafeInteger(animeId))
		{

			console.log("[Missing Argument]");
			res.sendStatus(HttpStatus.BAD_REQUEST);
			return;
		}

		//Anime finding
		let lAnime = Anime.list[animeId]
		if (!lAnime)
		{
			console.log("[Anime not found]");
			res.sendStatus(HttpStatus.NOT_FOUND);
			return;
		}

		return lAnime;
	}

	function tryToGetEpisodeOrSendStatus(res, animeId, episodeId)
	{
		//Arguments checking
		if (!Number.isSafeInteger(animeId) || !Number.isSafeInteger(episodeId))
		{

			console.log("[Missing Argument(s)]");
			res.sendStatus(HttpStatus.BAD_REQUEST);
			return;
		}

		//Anime finding
		let lAnime = Anime.list[animeId]
		if (!lAnime)
		{
			console.log("[Anime not found]");
			res.sendStatus(HttpStatus.NOT_FOUND);
			return;
		}

		//Episode finding
		let lEpisode = lAnime.getEpisodeById(episodeId);
		if (!lEpisode)
		{
			console.log("[Episode not found]");
			res.sendStatus(HttpStatus.NOT_FOUND);
			return;
		}

		return lEpisode
	}

	app.get('/get/episode/info', async (req, res, next) =>
	{

		let animeId = Number.parseInt(req.query.animeId);
		let episodeId = Number.parseInt(req.query.episodeId);
		let loadYtInfo = req.query.loadYtInfo;

		try
		{
			loadYtInfo = JSON.parse(loadYtInfo);
			if (typeof (loadYtInfo) !== "boolean") 
			{
				loadYtInfo = true;
			}
		}
		catch (e)
		{
			loadYtInfo = true;
		}

		console.log("?animeId = " + animeId);
		console.log("?episodeId = " + episodeId);
		console.log("?loadYtInfo = " + loadYtInfo);

		let lEpisode = tryToGetEpisodeOrSendStatus(res, animeId, episodeId);
		if (!lEpisode) return;

		//Get episode info and send
		try
		{
			let info = await lEpisode.getInfo(loadYtInfo);

			res.contentType("application/json");
			res.send(JSON.stringify(info));
		}
		catch (e)
		{
			console.log(e);
			res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	});

	//*///////////////////////////////*//
	//*     Get Anime seen Account    *//
	//*///////////////////////////////*//
	app.get('/get/account/seen', (req, res, next) =>
	{
		let name = req.query.name;

		let animeId = req.query.animeId;
		let episodeId = req.query.episodeId;

		console.log("?name = " + name);
		console.log("?animeId = " + animeId);
		console.log("?episodeId = " + episodeId);

		let account = Account.getAccountByName(name);

		if (!account) 
		{
			res.sendStatus(HttpStatus.BAD_REQUEST);
			return;
		}

		res.send(account.getSeen(animeId, episodeId));
	});

	//*///////////////////////////////*//
	//*     Set Anime seen Account    *//
	//*///////////////////////////////*//
	app.get('/edit/account/seen', (req, res, next) =>
	{
		let name = req.query.name;

		let animeId = req.query.animeId;
		let episodeId = req.query.episodeId;
		let value = req.query.value;

		console.log("?name = " + name);
		console.log("?animeId = " + animeId);
		console.log("?episodeId = " + episodeId);
		console.log("?value = " + value);

		let account = Account.getAccountByName(name);

		if (!account) 
		{
			res.sendStatus(HttpStatus.BAD_REQUEST);
			return;
		}

		account.setSeen(animeId, episodeId, value);
		account.save().then(
			() =>
			{
				res.sendStatus(HttpStatus.OK);
			}
		)
			.catch(
				(e) =>
				{
					console.log(e);
					res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
				}
			)

	});

	//*///////////////////////////////*//
	//*          Edit Account         *//
	//*///////////////////////////////*//
	app.get('/edit/account', (req, res, next) =>
	{
		let name = req.query.name;
		let account = Account.getAccountByName(name);

		if (!account) 
		{
			res.sendStatus(HttpStatus.BAD_REQUEST);
			return;
		}

		account.name = name;
		account.save()
			.then(() =>
			{
				res.sendStatus(HttpStatus.OK);
			})
			.catch((e) =>
			{
				res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
			});
	});

	//*///////////////////////////////*//
	//*        Download Episode       *//
	//*///////////////////////////////*//
	app.get('/get/episode/download', async (req, res, next) =>
	{
		let animeId;
		let episodeId;
		let videoPlayerId;
		let format;
		let url;

		try
		{
			animeId = Number.parseInt(req.query.animeId);
			episodeId = Number.parseInt(req.query.episodeId);
			videoPlayerId = Number.parseInt(req.query.videoPlayerId);
			format = req.query.format ? JSON.parse(req.query.format) : null;
			url = req.query.url;
		}
		catch (e)
		{
			console.error(e);
			res.sendStatus(HttpStatus.BAD_REQUEST);
			return;
		}

		console.log("?animeId = " + animeId);
		console.log("?episodeId = " + episodeId);
		console.log("?videoPlayerId = " + videoPlayerId);
		console.log("?ytFormat = " + JSON.stringify(format));
		console.log("?url = " + url);

		let lEpisode = tryToGetEpisodeOrSendStatus(res, animeId, episodeId);

		if (lEpisode.isLocal) 
		{
			//console.log("[Redirect] "+req.hostname+`/episode/${animeId}/${episodeid}`);
			//res.redirect(req.hostname+`/episode/${animeId}/${episodeid}`);
			res.sendStatus(HttpStatus.CONFLICT);
			return;
		}

		let download = DownloadEpisode.getFromEpisode(lEpisode) || new DownloadEpisode(lEpisode, videoPlayerId);
		if (download.isError) 
		{
			download.destroy();
			download = new DownloadEpisode(lEpisode, videoPlayerId);
		}

		if (!download.isDownloading && !download.isPending) download.download(url, format);

		//Episode
		res.send(JSON.stringify({ progress: (download.progress || 0) }));
	});

	//*///////////////////////////////*//
	//*         Download List         *//
	//*///////////////////////////////*//
	app.get('/get/list/download', async (req, res, next) =>
	{

		let downloads = DownloadEpisode.toDownload;
		let errorList = DownloadEpisode.list.filter(e => e.isError);

		let current = {}

		if (DownloadEpisode.currentDownload) 
		{
			let currentDlEpisode = DownloadEpisode.currentDownload.episode;
			current = {
				progress: currentDlEpisode.progress,
				episode: currentDlEpisode.anime.name + " : " + (currentDlEpisode.name || currentDlEpisode.episodeId)
			}
		}

		//Episode
		res.send(JSON.stringify({
			current: current,
			list: downloads.map((d) =>
			{
				let e = d.downloadEpisode.episode;
				return e.anime.name + " : " + (e.name || e.episodeId);
			}),
			error: errorList.map((d) =>
			{
				let e = d.episode;
				return { episode: e.anime.name + " : " + (e.name || e.episodeId), error: d.error };
			})
		}));
	});


	function loadAndSendFile(req, res, filePath)
	{
		console.log("[File path] " + filePath);

		res.sendFile(filePath), (err) =>
		{
			if (err) console.error(err);
		};
	}

	//*///////////////////////////////*//
	//*           Index.html          *//
	//*///////////////////////////////*//
	app.get('/', (req, res, next) =>
	{
		loadAndSendFile(req, res, path.join(__root, "public", "index.html"));
	});


	//*///////////////////////////////*//
	//*         Public Folder         *//
	//*///////////////////////////////*//
	let folders = ["js", "html", "css", "fonts", "asset/ico"];
	folders = folders.map(m => { return `/${m}/*` });

	app.get(folders, (req, res, next) =>
	{
		loadAndSendFile(req, res, path.join(__root, "public", req.path));
	});

	//*///////////////////////////////*//
	//*       Get Local Episode       *//
	//*///////////////////////////////*//
	app.get("/episode/:animeId/:episodeId", (req, res, next) =>
	{
		let animeId = Number.parseInt(req.params.animeId);
		let episodeId = Number.parseInt(req.params.episodeId);

		console.log(":animeId = " + animeId);
		console.log(":episodeId = " + episodeId);

		let episode = tryToGetEpisodeOrSendStatus(res, animeId, episodeId);
		loadAndSendFile(req, res, episode.path);
	});

	//*///////////////////////////////*//
	//*           Thumbnail           *//
	//*///////////////////////////////*//
	app.get("/asset/thumbnail/:text.png", async (req, res, next) =>
	{
		const commands = require("./image/imageWorkerCommands.js");

		let fileExtension = commands.fileExtension;

		let width = Number.parseInt(req.query.width);
		let height = Number.parseInt(req.query.height);
		let textSize = Number.parseFloat(req.query.textSize);
		let backgroundColor = req.query.backgroundColor;
		let textColor = req.query.textColor;
		let keepThumbnails = req.query.keepThumbnails;
		let text = req.params.text;

		let thumbailsFolder = path.join(__root, "public/asset/thumbails");
		let pathToTest = path.join(thumbailsFolder, `${text}.${fileExtension}`);
		if (!fs.existsSync(thumbailsFolder)) 
		{
			fs.mkdirSync(thumbailsFolder);
		}

		//If keep thumbnails, send them
		if (keepThumbnails !== 'false' && config.keepThumbnails) 
		{
			let thumbnlailExists = fs.existsSync(pathToTest);
			if (thumbnlailExists) 
			{
				return loadAndSendFile(req, res, pathToTest);
			}
		}

		/**
		 * @type {imageWriter.ThumbailOption}
		 */
		let options = {};
		if (Number.isSafeInteger(width)) options.width = width;
		if (Number.isSafeInteger(height)) options.height = height;
		if (!Number.isNaN(textSize)) options.textSize = textSize;
		if (backgroundColor) options.backgroundColor = backgroundColor;
		if (textColor) options.textColor = textColor;

		if (width > 2000 || width <= 0) options.width = null;
		if (height > 2000 || height <= 0) options.height = null;

		/**
		 * @ignore
		 * @type {string}
		 */
		let filePath;
		try
		{
			filePath = await imageWriter.getThumbail(text, options)
		}
		catch (e)
		{
			console.log(e);
			res.sendStatus(HttpStatus.INTERNAL_SERVER_ERROR);
			return;
		}

		//This code is executed on succes
		/////////////////////////////////

		res.sendFile(filePath, (e) =>
		{
			if (e)
			{
				console.error(e);
				return;
			}

			if (config.keepThumbnails) 
			{
				//Keep thumbnail
				let renamePath = pathToTest;
				fs.rename(filePath, renamePath, () =>
				{
					console.log(`Saved thumbnail as \"${renamePath}\"`)
				});
			}
			else 
			{
				//Remove thumbnail
				console.log(`Removing temp file at path \"${filePath}\"...`);
				fs.unlink(filePath, (err) =>
				{
					console.log(`Removed temp file`);
					if (err) console.error(err);
				});
			}
		});
	});

	//*///////////////////////////////*//
	//*     Set Account activity    *//
	//*///////////////////////////////*//
	app.get('/set/account/activity', (req, res, next) =>
	{
		let name = req.query.name;

		let animeId = req.query.animeId || -1;
		let episodeId = req.query.episodeId || -1;
		let videoTime = req.query.videoTime || -1;
		let date = req.query.date || -1; //{number} Date.now

		console.log("?name = " + name);
		console.log("?animeId = " + animeId);
		console.log("?episodeId = " + episodeId);
		console.log("?videoTime = " + videoTime);
		console.log("?date = " + date);

		let account = Account.getAccountByName(name);

		if (!account) 
		{
			res.sendStatus(HttpStatus.BAD_REQUEST);
			return;
		}

		account.setActivity(animeId, episodeId, videoTime, date);
		res.sendStatus(HttpStatus.OK);
	});

	//*///////////////////////////////*//
	//*     Get Account activities    *//
	//*///////////////////////////////*//
	app.get('/get/account/activity', (req, res, next) =>
	{
		let lList = Account.list;
		let lActivities = { activities: {}, accounts: [] };


		for (let i = lList.length - 1; i >= 0; i--)
		{
			let lAccount = lList[i];
			lActivities.activities[lAccount.name] = lAccount._activity;
			lActivities.accounts.push(lAccount.name);
		}

		res.send(lActivities);
	});

	try
	{
		app.listen(port, function ()
		{
			console.log(`App listening on port ${port}!`);
			let os = require('os');
			let ifaces = os.networkInterfaces();
			let protocol = "http://";
			let spaces = '  ';

			//////////////////////////////// From npm http-server ////////////////////////////////
			Object.keys(ifaces).forEach(function (dev)
			{										//
				ifaces[dev].forEach(function (details)
				{										//
					if (details.family === 'IPv4')
					{												//
						console.log(spaces + protocol + details.address + ':' + port.toString());	//
					}																				//
				});																				//
			});																					//
			//////////////////////////////////////////////////////////////////////////////////////

			console.log(spaces + protocol + "localhost:" + port.toString());
		});

	}
	catch (e)
	{
		console.error(e);
		throw '';
	}

	/**server.once("listening", () => {
	});*/
};


module.exports = start;