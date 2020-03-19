const path = require("path");
const express = require("express");
const HttpStatus = require('http-status-codes');

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
			res.sendStatus(HttpStatus.NOT_IMPLEMENTED);
		});
	}

	start(port = 3000)
	{
		this.app.listen(port, function () {
			console.log(`App listening on port ${port}!`);
		});
	}
}

module.exports = Server;