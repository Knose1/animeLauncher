import HTMLManager from './HTMLManager.js';
import Loader from '../Loader.js';
import 
{
	ScreenElementManager,
	ScreenElement,
	ScreenElementFromElement,
	SrcElement,
	ButtonElement,
	InputElement,
	MenuButtonElement,
	ProgressIndicator,
	ProgressBarIndicator,
	AnimeElement,
	EpisodeElement,
	EpisodeWatchButton,
	ReturnButton,
	DownloadAllButton,
	EpisodeInfoElement,
	PlayerInfoElement,
	YtDlFormatElement,
	EpisodeDlProgress,
	EpisodeDlErrorProgress
}
from './ScreenElement.js';

const LOADING_ANIMES = "Loading Animes...";
const LOADING_THUMBNAILS = "Loading Thumbnails...";
const ANIME_NODEJS = "AnimeNodeJs";
const INFO = "Info";
const WATCH = "Watch";

/**
 * Manage Screen
 * @memberof Public.Html
 */
class ScreenManager {

	/**
	 * 
	 * @param {string} title 
	 * @param {string} htmlTitle 
	 */
	static setTitle(title, htmlTitle) 
	{
		if (!htmlTitle) htmlTitle = title;

		HTMLManager.title.setText(htmlTitle);
		document.title = title;
	}

	static init()
	{
		HTMLManager.menuBar.append(
			//If click on Watch generate AnimeList
			new MenuButtonElement("Watch", () => {
				ScreenElementManager.removeListenersOnAllElements();
				this.generateAnimeListHTML();
			}),
			
			/*new MenuButtonElement("Edit Animes", () => {
			}),
			
			new MenuButtonElement("Edit Streams", () => {
			}),*/
			
			new MenuButtonElement("Reload Animes", () => {
				ScreenElementManager.removeListenersOnAllElements();
				Loader.loadAnimeList();
			})
		);
	}

	static showLoadingAnime()
	{
		this.setTitle(LOADING_ANIMES, ANIME_NODEJS);

		HTMLManager.body.clear();
		HTMLManager.body.append(
			new ScreenElement("p").setText(LOADING_ANIMES)
		);

	}

	static initAnimes(json) 
	{
		this.setTitle(LOADING_THUMBNAILS, ANIME_NODEJS);

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
		this.setTitle(ANIME_NODEJS);

		HTMLManager.body.clear();

		var animesElms = [];
		for (let i = 0; i < this.animes.length; i++) {
			const a = this.animes[i];
			
			animesElms.push(new AnimeElement(a, (anime) => {
				ScreenElementManager.removeListenersOnAllElements();
	
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
		this.setTitle(ANIME_NODEJS + " - " + anime.name, anime.name);

		HTMLManager.body.clear();
		
		let episodeElms = [];

		for (let i = 0; i < anime.episodes.length; i++) {
			let episode = anime.episodes[i];
			let isLocal = listIsEpisodeLocal[episode.episodeId];

			episodeElms.push(new EpisodeElement(anime, episode, isLocal, listIsEpisodeLocal,
				//OnClick
				(a,e) => {
					ScreenElementManager.removeListenersOnAllElements();
					Loader.getEpisodeInfo(a.id, e.episodeId, (d) => {ScreenManager.generateEpisodeInfo(d, a, e, listIsEpisodeLocal)});
				}
			));
		}

		HTMLManager.body.append(
			new ReturnButton(() => {
				ScreenElementManager.removeListenersOnAllElements();
	
				ScreenManager.generateAnimeListHTML();
			}),
			/*new DownloadAllButton(() => {
				ScreenElementManager.removeListenersOnAllElements();

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
			}),*/
			new ScreenElement("ul").addClass("episodes").appendList(episodeElms)
		);
		
		ScreenElementManager.allowStaticListener();
	}

	/**
	 * 
	 * @deprecated
	 * @param {*} info 
	 * @param {*} next 
	 */
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
			ScreenElementManager.removeListenersOnAllElements();

			ScreenManager.generateAnimeListHTML();
		});

		this.allowStaticListener();
	}

	static generateEpisodeInfo(info, anime, episode, listIsEpisodeLocal)
	{

		HTMLManager.body.clear();

		let animeId = info.animeId;
		let episodeId = info.episodeId;

		this.setTitle(INFO + " - " + anime.name + " : " + info.episodeId, INFO + " - " + anime.name + " : " + "Episode " + episodeId);

		let elmsToAppend = [];

		elmsToAppend.push(new ReturnButton(() => {
			ScreenElementManager.removeListenersOnAllElements();

			ScreenManager.generateEpisodeListHTML(anime, listIsEpisodeLocal);
		}));

		if (info.isLocal) elmsToAppend.push(new EpisodeWatchButton(anime, episode, listIsEpisodeLocal));

		//* SHOW NEXT EPISODE BUTTON *//
		let nextEpisode = ScreenManager.getNextEpisode(anime, episode);
		if (nextEpisode != null) 
		{
			elmsToAppend.push(
				new ButtonElement(() => {
					ScreenElementManager.removeListenersOnAllElements();
					Loader.getEpisodeInfo(animeId, nextEpisode.episodeId, (d) => {ScreenManager.generateEpisodeInfo(d, anime, nextEpisode, listIsEpisodeLocal)});
				}).append(new ScreenElement("h4").setText("Next - Episode "+nextEpisode.episodeId))
			);
		}

		elmsToAppend.push(
			new ScreenElement("br"),
			new ScreenElement("hr"),
			new ScreenElement("br"),
			new ScreenElement("br"),
			new EpisodeInfoElement(info,
				//Complete
				(p) => {
					alert("Download success ! Progess : "+p.progress);
					//ScreenManager.generateEpisodeListHTML(anime, listIsEpisodeLocal);
					ScreenElementManager.allowStaticListener();
				},
				//Error
				(e) => {
					alert("Can't download episode\nError : "+e);
					ScreenElementManager.allowStaticListener();
				}
			)
		);

		HTMLManager.body.appendList(elmsToAppend);
		ScreenElementManager.allowStaticListener();
	}

	/**
	 * 
	 * @param {string} url 
	 * @param {number} animeId 
	 * @param {number} episodeId 
	 */
	static showVideo(url, animeId, episodeId, listIsEpisodeLocal)
	{
		let anime = this.animes[animeId];
		this.setTitle(WATCH + " - " + anime.name + " : " + episodeId, anime.name + " : " + "Episode " + episodeId);

		let episode = ScreenManager.getEpisodeFromId(anime, episodeId);

		let nextEpisode = ScreenManager.getNextEpisode(anime, episode);
		
		HTMLManager.body.clear();

		HTMLManager.body.append(
			new SrcElement("video", url)
				.setControls(true)
				.setAutoplay(false)
				.setPoster(episode.posterLink || Loader.defaultThumbnailList[episodeId] || `/asset/thumbnail/${episodeId}.png?width:170&height:90&textSize=700`),
			new ScreenElement("h2")
				.setText(anime.name + " - " + (episode.name || "Episode " + episodeId)),
			
			new ScreenElement("br"),
			new ScreenElement("br"),
		);

		if (nextEpisode != null) 
		{
			HTMLManager.body.append(
				new ButtonElement(
					() => {
						ScreenElementManager.removeListenersOnAllElements();
						
						//If episode is local, show next video. Else show info
						if (listIsEpisodeLocal[nextEpisode.episodeId])
							Loader.loadLocalEpisode(animeId, nextEpisode.episodeId, listIsEpisodeLocal);
						else 
							Loader.getEpisodeInfo(animeId, nextEpisode.episodeId, (d) => {ScreenManager.generateEpisodeInfo(d, anime, nextEpisode, listIsEpisodeLocal)});
					}
				)
				.setText("Next - Episode "+nextEpisode.episodeId)
			);
		}

		HTMLManager.body.append(new ButtonElement(
			() => {
				ScreenElementManager.removeListenersOnAllElements();
				ScreenManager.generateEpisodeListHTML(anime, listIsEpisodeLocal);
			}).setText("Return to anime")
		);
		
		ScreenElementManager.allowStaticListener();
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

	/**
	 * @typedef DlCurrent
	 * @property {string} episode
	 * @property {number} progress
	 */
	/**
	 * @typedef DlError
	 * @property {string} episode
	 * @property {string} error
	 */

	/**
	 * @typedef DlList
	 * @property {DlCurrent} current
	 * @property {string[]} list
	 * @property {DlError[]} error
	 */

	/**
	 * 
	 * @param {DlList} list 
	 */
	static downloadList(list)
	{
		HTMLManager.downloadContainer.clear();

		if (list.current && list.current.episode) 
		{
			let indexOfCurrentEp = list.list.indexOf(list.current.episode);
			if (indexOfCurrentEp != -1) {
				list.list.splice(indexOfCurrentEp, 1);
			}
			
			HTMLManager.downloadContainer.append(new EpisodeDlProgress(list.current.episode,list.current.progress));
		}

		if (list.list.length > 0)
		{
			HTMLManager.downloadContainer.appendList(
				list.list.map(m => {return new ScreenElement("div").setText(m); })
			);
		}

		if (list.error.length > 0)
		{
			HTMLManager.downloadContainer.appendList(
				list.error.map(m => {return new EpisodeDlErrorProgress(m.episode, m.error); })
			);
		}
	}
};

export default ScreenManager;