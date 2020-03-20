const path = require("path");
const express = require("express");
const HttpStatus = require('http-status-codes');
const dataManager = require("./dataManager");

class Server
{
	/**
	 * @constant
	 */
	static get GET_URL_PREFIX() {return "get"}

	constructor()
	{
		/**
		 * @constant
		 */
		this.app = express();

		this.app.use(express.static(path.join(__dirname, 'public')));
		//this.app.use('/episode', express.static(path.join(__dirname, 'public')));

		this.app.get(Server.GET_URL_PREFIX + "/list", (req, res) => {
			res.contentType("application/json");
			res.send(JSON.parse(dataManager.Anime.list.length));
		});
	}

	start(port = 3000)
	{
		console.log("Animes : -"+dataManager.Anime.list.length);

		this.app.listen(port, function () {
			console.log(`App listening on port ${port}!`);
		});
	}
}

module.exports = Server;