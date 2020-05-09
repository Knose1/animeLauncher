import HTMLManager from './HTMLManager.js';
import Loader from '../Loader.js';
import 
{
	ScreenElementManager,
	ScreenElement,
	ScreenElementFromElement,
	ProgressIndicator,
	ButtonElement,
	MenuButtonElement,
	AnimeElement,
	EpisodeElement,
	EpisodeWatchButton,
	ReturnButton,
	DownloadAllButton
}
from './ScreenElement.js';

export default class ScreenManager {

	static init()
	{
		HTMLManager.menuBar.append(
			//If click on Watch generate AnimeList
			new MenuButtonElement("Watch", () => {
				ScreenElementManager.removeListenersOnAllElements();
				this.generateAnimeListHTML();
			}),
			
			new MenuButtonElement("Edit Animes", () => {
			}),
			
			new MenuButtonElement("Edit Streams", () => {
			}),
			
			new MenuButtonElement("Reload Animes", () => {
				ScreenElementManager.removeListenersOnAllElements();
				Loader.loadAnimeList();
			})
		);
	}

	static showLoadingAnime()
	{
		HTMLManager.body.clear();
		HTMLManager.body.append(
			new ScreenElement("p").setText("Loading Animes...")
		);

	}

	static initAnimes(json) 
	{
		HTMLManager.body.clear();

		/* It's cool to get the anime from the episode */
		this.animes = json.map( (m) => {
			m.episodes = m.episodes.map( e => {e.anime = m; return e;});
			return m;
		});

		console.log(this.animes);

		/* Get all id (to generate the thumnail) */
		/**
		 * @type {number[]}
		 */
		let episodeIds = [];
		for (let i = this.animes.length - 1; i >= 0; i--) {
			let lAnime = this.animes[i];
			for (let j = lAnime.episodes.length - 1; j >= 0; j--) {
				let lEpisode = lAnime.episodes[j];

				if (episodeIds.includes(lEpisode.episodeId)) continue;
				episodeIds.push(lEpisode.episodeId);
			}
		}

		let progress = new ProgressIndicator();
		
		HTMLManager.body.append(
			new ScreenElement("p").setText("Generating default episode thumbnail please wait..."),
			new ScreenElement("br"),
			progress
		);

		let oncomplete = () => 
		{
			this.generateAnimeListHTML();
		};

		let onprogress = (p) => 
		{
			progress.setProgress(p);
		}

		/* Generate the Thumbnails */
		Loader.preloadDefaultThumbnail(episodeIds, oncomplete, onprogress);
	}
	
	/**
	 * Generate the list of animes
	 */
	static generateAnimeListHTML()
	{
		HTMLManager.body.clear();

		var animesElms = [];
		for (let i = 0; i < this.animes.length; i++) {
			const a = this.animes[i];
			
			animesElms.push(new AnimeElement(a, (anime) => {
				ScreenElementManager.removeListeners();
	
				let listIsEpisodeLocal = [];
	
				//Get if the episode is local or not for each episode
				let currentIndex = -1;
				const next = () => {
					++currentIndex;
					
					if (currentIndex >= anime.episodes.length) 
					{
						this.generateEpisodeListHTML(anime, listIsEpisodeLocal);
						return;
					}
	
					let epId = anime.episodes[currentIndex].episodeId;
	
					Loader.getEpisodeInfo(anime.id, epId, (d) => {
						listIsEpisodeLocal[epId] = d.isLocal;
						next();
					}, false);
				};
	
				next();
			}));
		}

		console.log(animesElms);

		// **************** //
		// HTML STARTS HERE //
		// **************** //
		HTMLManager.body.append(
			new ScreenElement("ul").setId("animeList").appendList(animesElms)
		);
		// **************** //
		//  HTML ENDS HERE  //
		// **************** //

		ScreenElementManager.allowStaticListener();
	}

	static generateEpisodeListHTML(anime, listIsEpisodeLocal)
	{
		HTMLManager.body.clear();
		
		let episodeElms = [];

		for (let i = 0; i < anime.episodes.length; i++) {
			let episode = anime.episodes[i];
			let isLocal = listIsEpisodeLocal[episode.episodeId];

			episodeElms.push(new EpisodeElement(anime, episode, isLocal,
				//OnClick
				(a,e) => {
					ScreenElementManager.removeListeners();
					Loader.getEpisodeInfo(a.id, e.episodeId, (d) => {ScreenManager.generateEpisodeInfo(d, args[0], args[1])});
				}
			));
		}

		HTMLManager.body.append(
			new ReturnButton(() => {
				ScreenElementManager.removeListeners();
	
				ScreenManager.generateAnimeListHTML();
			}),
			new DownloadAllButton(() => {
				ScreenElementManager.removeListeners();

				let i = -1;
				let next = () => 
				{
					if (++i >= episodeButtons.length) 
					{
						alert("Download is done");
						ScreenManager.generateEpisodeListHTML(anime);
						return;
					}

					let lElement = episodeButtons[i].parentElement;
		
					let args = lElement.id.slice("episode".length).split("-").map( i => parseInt(i));

					Loader.getEpisodeInfo(args[0], args[1], (d) => {ScreenManager.generateEpisodeInfoForDownload(d, next)});
				}
				
				next();
			}),
			new ScreenElement("ul").addClass("episodes").appendList(episodeElms)
		);
		
		ScreenElementManager.allowStaticListener();
	}

	static generateEpisodeInfoForDownload(info, next) 
	{
		if (info.isLocal) 
		{
			next();
			return;
		}

		let animeId = info.animeId;
		let episodeId = info.episodeId;
		
		let anime = this.animes[animeId];
		let episode = ScreenManager.getEpisodeFromId(anime, episodeId);


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
			
			lToReturn += `<button class="download ${i}"> dl</button>`
			lToReturn += `</div>`;
			

			return `<div class="tab-1">${lToReturn}</div>`;

		}).join("<br/>\n")}`+
		`</div>`;

		HTMLManager.body.innerHTML = lText;

		this.addListener(HTMLManager.body.querySelector("#return"), "click", () => {
			ScreenElementManager.removeListeners();

			ScreenManager.generateAnimeListHTML();
		});

		this.allowStaticListener();
	}

	static generateEpisodeInfo(info)
	{
		let lText = `<button id="return">Return</button>`

		if (info.isLocal) lText += `<button id="watch">Watch Local</button>`;
		lText += `<br/><hr/>`;
		lText += `<br/>`+
		`<br/>`+
		`<div>`+
		`Name : ${info.name}<br/>`+
		`AnimeId : ${info.animeId}<br/>`+
		`EpisodeId : ${info.episodeId}<br/>`+
		`PosterLink : ${info.posterLink}<br/>`+
		`IsLocal : ${info.isLocal}<br/>`+
		`HasPoster : ${info.hasPoster}<br/>`+
		`${info.players.map( (player, i) => {

			let lToReturn = `${player.player.name}:<br/>`+
			`<div class="tab-1">`+
			`URL : ${player.url}<br/>`+
			`isYoutube : ${Boolean(player.isYoutube)}<br/>`+
			`isNatif : ${player.player.isNatif}<br/>`+
			`downloadable : ${player.player.downloadable}<br/>`+
			`autoDownload : ${player.player.autoDownload}<br/>`+
			`id : ${player.player.id}<br/>`
			
			if (player.ytInfo) 
			{
				lToReturn += `\tytInfo : <div class="ytInfo">${player.ytInfo.formats.map( (f, ytIndex) => 
				{
					return `<div class="tab-1 code"><pre class="tab-1">${JSON.stringify(f,"",3)}</pre>`+
					`<button class="download yt" id="dl ${i}-${ytIndex}">download</button></div>`
				}).join("<br/><br/>")}</div><br/>`;
			}
			else if (player.player.autoDownload) {
				lToReturn += `<button class="download autoDownload" id="dl ${i}">download</button>`;
				lToReturn += `</div>`;
			}
			else {
				lToReturn += `<button class="download" id="dl ${i}">show iFrame for download</button>`;
				lToReturn += `</div>`;
			}
			

			return `<div class="tab-1">${lToReturn}</div>`;

		}).join("<br/>")}`+
		`</div>`;

		HTMLManager.body.innerHTML = lText;


		let animeId = info.animeId;
		let episodeId = info.episodeId;

		let anime = this.animes[animeId];

		let episode = ScreenManager.getEpisodeFromId(anime, episodeId);

		//* RETURN BUTTON *//
		let returnBtn = HTMLManager.body.querySelector("#return")
			this.addListener(returnBtn, "click", () => {
			this.removeListeners();

			ScreenManager.generateEpisodeListHTML(anime);
		});
		
		//* WATCH ANIME BUTTON *//
		let watch = HTMLManager.body.querySelector("#watch");
		if (watch) 
		{
			this.addListener(watch, "click", () => {
				
			});
		}

		//* DOWNLOAD BUTTON *//
		let downloadList = HTMLManager.body.querySelectorAll(".download");
		for (let i = downloadList.length - 1; i >= 0; i--) {
			let lElement = downloadList[i];
			//const oncomplete = () => {next()}
			const oncomplete = (p) => {
				alert("Download success ! Progess : "+p.progress);
				ScreenManager.generateEpisodeListHTML(anime);
			};
			const catchError = (e) => {
				alert("Can't download episode\nError : "+e);
				ScreenManager.allowStaticListener();
			};
			const ytdlHandeler = () => {
				
				let ids = lElement.id.slice("dl ".length, lElement.id.length).split("-");
				let player = info.players[parseInt(ids[0])];
				let format = player.ytInfo.formats[parseInt(ids[1])];

				this.removeListeners();
				Loader.download(info.animeId, info.episodeId, player.player.id, player.url, format)
				.then(oncomplete)
				.catch(catchError);
			};
			
			const iFrameHandeler = () => {

			};

			const autoDlHandeler = () => {
				
				let id = parseInt(lElement.id.slice("dl ".length, lElement.id.length));
				let player = info.players[id];
				
				this.removeListeners();
				dlPromise = Loader.download(info.animeId, info.episodeId, player.player.id, player.url)
				.then(oncomplete)
				.catch(catchError);
			};

			//Get appropriate download handeler. Default : iFrame
			let lHandleClick = iFrameHandeler;
			if (lElement.classList.contains("yt")) 
				lHandleClick = ytdlHandeler;
			else if (lElement.classList.contains("autoDownload")) 
				lHandleClick = autoDlHandeler;
			
			
			this.addListener(lElement, "click", lHandleClick);
		}

		//* SHOW NEXT EPISODE BUTTON *//
		let nextEpisode = ScreenManager.getNextEpisode(anime, episode);
		let nextButton = null
		if (nextEpisode != null) 
		{
			nextButton = document.createElement("button");
			this.addListener(nextButton, "click", () => {
				this.removeListeners();
				Loader.getEpisodeInfo(animeId, nextEpisode.episodeId, (d) => {ScreenManager.generateEpisodeInfo(d)});
			});

			nextButton.innerText = "Next - Episode "+nextEpisode.episodeId;
		}
		if (nextButton != null) (watch ? watch : returnBtn).after(nextButton);

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

		let episode = ScreenManager.getEpisodeFromId(anime, episodeId);

		let nextEpisode = ScreenManager.getNextEpisode(anime, episode);
		
		HTMLManager.body.innerHTML = "";

		let title = document.createElement("h2");
		title.innerText = anime.name + " - " + (episode.name || "Episode " + episodeId)

		let video = document.createElement("video");
		video.src = url;
		video.controls = true;
		video.autoplay = false;
		video.poster = episode.posterLink || Loader.defaultThumbnailList[episodeId] || `/asset/thumbnail/${episodeId}.png?width:170&height:90&textSize=700`;

		let nextButton = null
		if (nextEpisode != null) 
		{
			nextButton = document.createElement("button");
			this.addListener(nextButton, "click", () => {
				this.removeListeners();
				Loader.getEpisodeInfo(animeId, nextEpisode.episodeId, (d) => {ScreenManager.generateEpisodeInfo(d)});
			});

			nextButton.innerText = "Next - Episode "+nextEpisode.episodeId;
		}

		let animeButton = null
		animeButton = document.createElement("button");
		this.addListener(animeButton, "click", () => {
			this.removeListeners();
			ScreenManager.generateEpisodeListHTML(anime);
		});

		animeButton.innerText = "Return to anime";

		HTMLManager.body.appendChild(video);
		HTMLManager.body.appendChild(title);
		HTMLManager.body.appendChild(document.createElement("br"));
		HTMLManager.body.appendChild(document.createElement("br"));
		
		if (nextButton != null) HTMLManager.body.appendChild(nextButton);
		HTMLManager.body.appendChild(animeButton);
		
		this.allowStaticListener();
	}

	static generateDownloadPhase()
	{
		
	}

	static getNextEpisode(anime, episode) 
	{
		let nextEpisode = null;
		//Get next episode
		for (let i = anime.episodes.length - 1; i >= 0; i--) {
			let epi = anime.episodes[i];
			
			if (epi.episodeId <= episode.episodeId) continue;

			if (nextEpisode == null || epi.episodeId < nextEpisode.episodeId)
			{
				nextEpisode = epi;
			}
		}

		return nextEpisode;
	}

	static getEpisodeFromId(anime, episodeId) 
	{	
		for (let i = anime.episodes.length - 1; i >= 0; i--) {
			let epi = anime.episodes[i];
			
			if (epi.episodeId == episodeId) return epi;
		}

		return null;
	}
};
