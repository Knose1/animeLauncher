import HTMLManager from './HTMLManager.js';
import Loader from '../Loader.js';

export default class DataManager {

	/**
	 * @typedef Listener
	 * @property {HTMLElement} elm 
	 * @property {string} type 
	 * @property {function} handeler 
	 * @property {boolean} isStatic 
	 */

	/**
	 * 
	 * @param {HTMLElement} elm 
	 * @param {string} type 
	 * @param {function} handeler 
	 * @param {boolean} isStatic 
	 */
	static addListener(elm, type, handeler, isStatic = false)
	{
		elm.addEventListener(type, handeler);
		this.listeners.push({elm, type, handeler, isStatic});
	}

	static allowStaticListener()
	{
		for (let i = this.listeners.length - 1; i >= 0; i--) {
			let lElement = this.listeners[i];

			if (!lElement.isStatic) 
			{
				continue;
			}

			lElement.elm.addEventListener(lElement.type, lElement.handeler);
		}
	}

	static removeListeners()
	{
		for (let i = this.listeners.length - 1; i >= 0; i--) {
			let lElement = this.listeners[i];

			if (!lElement.isStatic) 
			{
				this.listeners.splice(i, 1);
			}

			lElement.elm.removeEventListener(lElement.type, lElement.handeler);
		}
	}

	static initAnimes(json) 
	{
		/**
		 * @type {Listener[]} 
		 */
		this.listeners = [];

		this.animes = json.map( (m) => {
			m.episodes = m.episodes.map( e => {e.anime = m; return e;});
			return m;
		});

		console.log(this.animes);

		this.generateAnimeListHTML()

		this.addListener(HTMLManager.buttons.home, "click", () => {
			this.removeListeners();
			this.generateAnimeListHTML();
		}, true);
	}
	
	static generateAnimeListHTML()
	{
		var animesString = "";
		for (let i = 0; i < this.animes.length; i++) {
			const a = this.animes[i];
				//Animes
			let thumbnail = a.thumbnailLink ? `<img src="${a.thumbnailLink}"/>` : "";
		
			animesString += 
			`<li class="anime" id="anime ${a.id}">
				<button>
					${thumbnail}
					<h1>${a.name}</h1>
				</button>
			</li>`
			
			
		}

		// **************** //
		// HTML STARTS HERE //
		// **************** //
		HTMLManager.body.innerHTML = 
		`<ul id="animeList">
			${animesString}
		</ul>`;
		// **************** //
		//  HTML ENDS HERE  //
		// **************** //

		let animeButtons = Array.from(HTMLManager.body.querySelectorAll(".anime > button"));
		for (let i = animeButtons.length - 1; i >= 0; i--) {
			let lElement = animeButtons[i].parentElement;
			let id = parseInt(lElement.id.slice("anime".length));

			this.addListener(lElement, "click", () => {
				this.removeListeners();
				this.generateEpisodeListHTML(this.animes[id]);
			});

		}

		this.allowStaticListener();
	}

	static generateEpisodeListHTML(anime)
	{
		let episodeString = "";

		for (let i = 0; i < anime.episodes.length; i++) {

			const e = anime.episodes[i];
			let poster = e.posterLink ? `<img src="${e.posterLink}"/>` : "";

			episodeString += `
				<li class="episode" id="episode ${anime.id}-${e.episodeId}">
					<button>
						${poster}
						<h2>${e.name || "Episode " + e.episodeId}</h2>
					</button>
				</li>
			`
		}

		HTMLManager.body.innerHTML =
		`<button id="return">Return</button>\n`+
		`<button id="downloadAll">downloadAll</button>\n`+
		`<ul style="" class="episodes">
			${episodeString}
		</ul>`

		let episodeButtons = Array.from(HTMLManager.body.querySelectorAll(".episode > button"));
		for (let i = episodeButtons.length - 1; i >= 0; i--) {
			let lElement = episodeButtons[i].parentElement;

			this.addListener(lElement, "click", () => {
				this.removeListeners();

				let args = lElement.id.slice("episode".length).split("-").map( i => parseInt(i));
				Loader.getEpisodeInfo(args[0], args[1], DataManager.generateEpisodeInfo);
			});
		}
		
		this.addListener(HTMLManager.body.querySelector("#return"), "click", () => {
			this.removeListeners();

			DataManager.generateAnimeListHTML();
		});
		
		this.addListener(HTMLManager.body.querySelector("#downloadAll"), "click", () => {
			this.removeListeners();

			let i = 0;
			next = () => 
			{
				if (++i == episodeButtons.length) 
				{
					generateEpisodeListHTML(anime);
					return;
				}

				let lElement = episodeButtons[i].parentElement;
	
				let args = lElement.id.slice("episode".length).split("-").map( i => parseInt(i));

				Loader.getEpisodeInfo(args[0], args[1], (d) => {DataManager.generateEpisodeInfoForDownload(d, next)});
			}
			
			next();
		});
		
		this.allowStaticListener();
	}

	static generateEpisodeInfoForDownload(info, next) 
	{
		if (info.isLocal) 
		{
			next();
			return;
		}

		let lText =
		`<button id="return">Return</button>\n`+
		`<br/>`+
		`<br/>`+
		`<div>\n`+
		`Name : ${info.name}<br/>\n`+
		`AnimeId : ${info.animeId}<br/>\n`+
		`EpisodeId : ${info.episodeId}<br/>\n`+
		`${info.players.map( (player, i) => {

			let lToReturn = `${player.player.name}:<br/>\n`+
			`<div class="tab-1">\n`+
			`\tURL : ${player.url}<br/>\n`+
			`\tisYoutube : ${Boolean(player.isYoutube)}<br/>\n`+
			`\tisNatif : ${player.player.isNatif}<br/>\n`+
			`\tdownloadable : ${player.player.downloadable}<br/>\n`+
			`\tautoDownload : ${player.player.autoDownload}<br/>\n`+
			`\tid : ${player.player.id}<br/>`
			
			if (player.ytInfo) lToReturn += `\tytInfo : ${player.ytInfo}<br/>`;
			
			lToReturn += `<button class="download ${i}"> dl</button>`
			lToReturn += `</div>`;
			

			return `<div class="tab-1">${lToReturn}</div>`;

		}).join("<br/>\n")}`+
		`</div>`;

		HTMLManager.body.innerHTML = lText;

		this.addListener(HTMLManager.body.querySelector("#return"), "click", () => {
			this.removeListeners();

			DataManager.generateAnimeListHTML();
		});

		this.allowStaticListener();
	}

	static generateEpisodeInfo(info)
	{
		let lText =
		`<button id="return">Return</button>\n`+
		`<br/>`+
		`<br/>`+
		`<div>\n`+
		`Name : ${info.name}<br/>\n`+
		`AnimeId : ${info.animeId}<br/>\n`+
		`EpisodeId : ${info.episodeId}<br/>\n`+
		`PosterLink : ${info.posterLink}<br/>\n`+
		`IsLocal : ${info.isLocal}<br/>\n`+
		`HasPoster : ${info.hasPoster}<br/>\n`+
		`${info.players.map( (player, i) => {

			let lToReturn = `${player.player.name}:<br/>\n`+
			`<div class="tab-1">\n`+
			`\tURL : ${player.url}<br/>\n`+
			`\tisYoutube : ${Boolean(player.isYoutube)}<br/>\n`+
			`\tisNatif : ${player.player.isNatif}<br/>\n`+
			`\tdownloadable : ${player.player.downloadable}<br/>\n`+
			`\tautoDownload : ${player.player.autoDownload}<br/>\n`+
			`\tid : ${player.player.id}<br/>`
			
			if (player.ytInfo) lToReturn += `\tytInfo : ${player.ytInfo}<br/>`;
			
			lToReturn += `<button class="download" id="dl ${i}"> dl</button>`
			lToReturn += `</div>`;
			

			return `<div class="tab-1">${lToReturn}</div>`;

		}).join("<br/>\n")}`+
		`</div>`;

		if (info.isLocal) lText += `<br/><hr/><button id="watch">Watch Local</button>`;

		HTMLManager.body.innerHTML = lText;

		this.addListener(HTMLManager.body.querySelector("#return"), "click", () => {
			this.removeListeners();

			DataManager.generateAnimeListHTML();
		});

		this.addListener(HTMLManager.body.querySelector("#watch"), "click", () => {
			this.removeListeners();
				
			Loader.loadLocalEpisode(info.animeId, info.episodeId);
		});

		let downloadList = HTMLManager.body.querySelectorAll(".download");
		for (let i = downloadList.length - 1; i >= 0; i--) {
			let lElement = downloadList[i];
			
			this.addListener(lElement, "click", () => {
				
				let id = parseInt(lElement.id.substr(0, "dl ".length));
				Loader.download()
			});
		}

		this.allowStaticListener();
	}

	/**
	 * 
	 * @param {string} url 
	 * @param {number} animeId 
	 * @param {number} episodeId 
	 */
	static showVideo(url, animeId, episodeId)
	{
		let anime = this.animes[animeId];

		let episode;
		for (let i = anime.episodes.length - 1; i >= 0; i--) {
			episode = anime.episodes[i];
			
			if (episode.episodeId == episodeId) break;
		}

		HTMLManager.body.innerHTML = "";

		let title = document.createElement("h2");
		title.innerText = anime.name + " - " + (episode.name || "Episode " + episodeId)

		let video = document.createElement("video");
		video.src = url;
		video.controls = true;
		video.autoplay = false;
		video.poster = episode.posterLink || `/asset/thumbnail/${episodeId}.png?width:170&height:90&textSize=700`;

		HTMLManager.body.appendChild(video);
		HTMLManager.body.appendChild(title);
		
		this.allowStaticListener();
	}
};
