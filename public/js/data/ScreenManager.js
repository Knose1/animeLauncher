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
	VideoElement,
	AnimeVideoElement,
	AnimeElement,
	EpisodeElement,
	EpisodeWatchButton,
	ReturnButton,
	DownloadAllButton,
	EpisodeInfoElement,
	PlayerInfoElement,
	YtDlFormatElement,
	EpisodeDlProgress,
	EpisodeDlErrorProgress,
	Account,
	VideoTime
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

	/**
	 * 
	 * @param {Function} value 
	 * @param {string} returnTitle 
	 */
	static _OnReturn(value, returnTitle) 
	{
		let lReturn = () => {
			if (!returnTitle || confirm("Return to "+returnTitle)) 
			{
				if (value) value();
			}
		};

		ScreenElementManager.removeKeyListener(ScreenElementManager.KeyTypeEnum.DOWN, HTMLManager.document, "Backspace");	
		ScreenElementManager.addKeyListener(ScreenElementManager.KeyTypeEnum.DOWN, HTMLManager.document, lReturn, "Backspace", true);	
	}

	/**
	 * 
	 * @param {AnimeVideoElement} videoElement 
	 */
	static setVideo(videoElement)
	{
		this.currentVideo = videoElement;
	}

	/**
	 * @this {ScreenManager}
	 */
	static init()
	{
		ScreenManager.setVideo(null);

		/**
		 * @public
		 * @static
		 * @type {string}
		 */
		this.currentAccount = "";

		/**
		 * @type {MenuButtonElement}
		 */
		this.setAccountBtn = new MenuButtonElement("", () => {
			ScreenManager._showAndLoadAccounts();
		})

		HTMLManager.menuBar.append(
			//If click on Watch generate AnimeList
			new MenuButtonElement("Watch", () => {
				ScreenElementManager.removeListenersOnAllElements();
				ScreenManager.generateAnimeListHTML();
			}),
			
			/*new MenuButtonElement("Edit Animes", () => {
			}),
			
			new MenuButtonElement("Edit Streams", () => {
			}),*/
			
			new MenuButtonElement("Reload Animes", () => {
				ScreenElementManager.removeListenersOnAllElements();
				Loader.loadAnimeList();
			}),
			
			ScreenManager.setAccountBtn
		);

		ScreenManager.setAccountName("");
		ScreenElementManager.init();
	}

	static setAccountName(name) {
		ScreenManager.currentAccount = name;
		ScreenManager.setAccountBtn.setName(ScreenManager.currentAccount == "" ? "Set Account" : "Connected as "+ScreenManager.currentAccount);
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
				let listIsEpisode404 = [];
				let listIsSeen = [];
	
				//Get if the episode is local or not for each episode
				let currentIndex = -1;
				const next = () => {
					++currentIndex;
					
					if (currentIndex >= anime.episodes.length) 
					{
						this.generateEpisodeListHTML(anime, listIsEpisodeLocal, listIsEpisode404, listIsSeen);
						return;
					}
	
					let epId = anime.episodes[currentIndex].episodeId;
	
					Loader.getEpisodeInfo(anime.id, epId, (d) => {
						listIsEpisodeLocal[epId] = d.isLocal;
						listIsEpisode404[epId] = d.is404;
						Loader.getIsSeen(ScreenManager.currentAccount ,anime.id, epId, (s) => {
							listIsSeen[epId] = s;
							next();
						});
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
			new ScreenElement("ul").setId("animeList").addClass("list-group").appendList(animesElms)
		);
		// **************** //
		//  HTML ENDS HERE  //
		// **************** //

		ScreenElementManager.allowStaticListener();
	}

	static generateEpisodeListHTML(anime, listIsEpisodeLocal, listIsEpisode404, listIsSeen)
	{
		this.setTitle(ANIME_NODEJS + " - " + anime.name, anime.name);

		
		HTMLManager.body.clear();
		
		let episodeElms = [];

		for (let i = 0; i < anime.episodes.length; i++) {
			let episode = anime.episodes[i];
			let isLocal = listIsEpisodeLocal[episode.episodeId];
			let is404 = listIsEpisode404[episode.episodeId];

			episodeElms.push(new EpisodeElement(anime, episode, isLocal, listIsEpisodeLocal, listIsEpisode404, listIsSeen,
				//OnClick
				(a,e) => {
					ScreenElementManager.removeListenersOnAllElements();
					Loader.getEpisodeInfo(a.id, e.episodeId, (d) => {
						ScreenManager.generateEpisodeInfo(d, a, e, listIsEpisodeLocal, listIsEpisode404, listIsSeen);
					});
				}
			));
		}

		let lReturn = () => {
			ScreenElementManager.removeListenersOnAllElements();

			ScreenManager.generateAnimeListHTML();
		}
		ScreenManager._OnReturn(
			lReturn,
			"Anime List"
		);
		HTMLManager.body.append(
			new ReturnButton(lReturn),
			
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

	static generateEpisodeInfo(info, anime, episode, listIsEpisodeLocal, listIsEpisode404, listIsSeen)
	{

		HTMLManager.body.clear();

		let animeId = info.animeId;
		let episodeId = info.episodeId;

		this.setTitle(INFO + " - " + anime.name + " : " + info.episodeId, INFO + " - " + anime.name + " : " + "Episode " + episodeId);

		let elmsToAppend = [];
		let lReturn = () => {
			ScreenElementManager.removeListenersOnAllElements();

			ScreenManager.generateEpisodeListHTML(anime, listIsEpisodeLocal, listIsEpisode404, listIsSeen);
		};

		elmsToAppend.push(new ReturnButton(lReturn));
		ScreenManager._OnReturn(
			lReturn,
			"Episode list"
		);

		if (info.isLocal) elmsToAppend.push(new EpisodeWatchButton(anime, episode, listIsEpisodeLocal, listIsEpisode404, listIsSeen));

		//* SHOW NEXT EPISODE BUTTON *//
		let nextEpisode = ScreenManager.getNextEpisode(anime, episode);
		if (nextEpisode != null) 
		{
			elmsToAppend.push(
				new ButtonElement(() => {
					ScreenElementManager.removeListenersOnAllElements();
					Loader.getEpisodeInfo(animeId, nextEpisode.episodeId, (d) => {
						ScreenManager.generateEpisodeInfo(d, anime, nextEpisode, listIsEpisodeLocal, listIsEpisode404, listIsSeen)
					});
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
	 * @param {Array<boolean>} listIsEpisodeLocal 
	 * @param {Array<boolean>} listIsEpisode404 
	 * @param {Array<boolean>} listIsSeen 
	 */
	static showVideo(url, animeId, episodeId, listIsEpisodeLocal, listIsEpisode404, listIsSeen)
	{
		let anime = this.animes[animeId];
		this.setTitle(WATCH + " - " + anime.name + " : " + episodeId, anime.name + " : " + "Episode " + episodeId);

		let episode = ScreenManager.getEpisodeFromId(anime, episodeId);

		let nextEpisode = ScreenManager.getNextEpisode(anime, episode);
		
		HTMLManager.body.clear();

		let video = new AnimeVideoElement(url, episode, episodeId, nextEpisode, listIsEpisodeLocal, listIsEpisode404, listIsSeen);
		let times = new VideoTime(animeId, episodeId);
		
		ScreenManager.setVideo(video);

		HTMLManager.body.append(
			new ScreenElement("div").append(video,times).addClass("horizontal"),
			new ScreenElement("h2")
				.setText(anime.name + " - " + (episode.name || "Episode " + episodeId)),
			
			new ScreenElement("br"),
			new ScreenElement("br"),
		);

		if (nextEpisode != null) 
		{
			let nextEpId = nextEpisode.episodeId;
			let boolIsLocal = !listIsEpisode404[nextEpId] && listIsEpisodeLocal[nextEpId];
			let btnNext = new ButtonElement(
				() => {
					ScreenElementManager.removeListenersOnAllElements();
					
					//If episode is local, show next video. Else show info
					if (boolIsLocal) {
						ScreenElementManager.removeListenersOnAllElements();
						Loader.loadLocalEpisode(animeId, nextEpId, listIsEpisodeLocal, listIsEpisode404, listIsSeen);
					}
					else 
						Loader.getEpisodeInfo(animeId, nextEpId, (d) => {ScreenManager.generateEpisodeInfo(d, anime, nextEpisode, listIsEpisodeLocal, listIsEpisode404)});
				}
			)
			

			if (boolIsLocal)
				btnNext.setText("Watch Next - Episode "+nextEpId);
			else
				btnNext.setText("Download Next - Episode "+nextEpId);
			
			if (listIsSeen[nextEpId]) btnNext.setBtnSuccess();
			else btnNext.setBtnDark();

			HTMLManager.body.append(
				btnNext
			);
		}
		
		if (ScreenManager.currentAccount) {
			//if connected

			let btnSeen = new ButtonElement(
				() => {
					Loader.setSeen(ScreenManager.currentAccount, animeId, episodeId, !listIsSeen[episodeId], () => {
						listIsSeen[episodeId] = !listIsSeen[episodeId];
						btnSeen.setText(listIsSeen[episodeId] ? "Set as not seen" :  "Set as seen");

						if (listIsSeen[episodeId]) btnSeen.setBtnSuccess();
						else btnSeen.setBtnDark();
					});
				}
			).setText(listIsSeen[episodeId] ? "Set as not seen" :  "Set as seen");
			
			if (listIsSeen[episodeId]) btnSeen.setBtnSuccess();
			else btnSeen.setBtnDark();

			HTMLManager.body.append(btnSeen);
		}

		let lReturn = () => {
			ScreenElementManager.removeListenersOnAllElements();
			ScreenManager.generateEpisodeListHTML(anime, listIsEpisodeLocal, listIsEpisode404, listIsSeen);
		};
		ScreenManager._OnReturn(
			lReturn,
			"Episode List"
		);
		HTMLManager.body.append(
			new ButtonElement(lReturn).setText("Return to anime")
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
	 * @memberof Public.Html.ScreenManager
	 */
	/**
	 * @typedef DlError
	 * @property {string} episode
	 * @property {string} error
	 * @memberof Public.Html.ScreenManager
	 */

	/**
	 * @typedef DlList
	 * @property {DlCurrent} current
	 * @property {string[]} list
	 * @property {DlError[]} error
	 * @memberof Public.Html.ScreenManager
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

	static showAccounts(accounts) 
	{
		Account.accountMode = Account.CLICK;

		/* RETURN */
		let lReturn = () => {
			ScreenElementManager.allowStaticListener();
			HTMLManager.accountOverlay.addClass("disabled");
			Account.accountMode = Account.CLICK;
			ScreenManager.generateAnimeListHTML();
		};
		ScreenManager._OnReturn(lReturn);
		/* ****** */
		
		/* INIT */
		let firstC = HTMLManager.accountOverlay.firstChild;
		firstC.clear();
		
		let accountContainer = new ScreenElement("div").addClass("accCont");
		let actionContainer = new ScreenElement("div").addClass("actCont");
		firstC.append(accountContainer, actionContainer);

		HTMLManager.loadingOverlay.addClass("disabled");
		HTMLManager.accountOverlay.removeClass("disabled");
		/* **** */
		
		/* INIT ACCOUNTS */
		for (let i = accounts.length - 1; i >= 0; i--) {
			let lName = accounts[i];

			let lSetAccount = () => {
				alert("Connected as "+lName);
				this.setAccountName(lName);
				lReturn();
			};

			let lRemoveAccount = () => {
				if (confirm("Remove account \""+lName+"\" ?"))
				Loader.removeAccount(lName, () => {ScreenManager._showAndLoadAccounts();});
			}
			
			let lAccount = new Account( lSetAccount, lRemoveAccount, false).setName(lName);
			if (ScreenManager.currentAccount === lName) lAccount.addClass("current");
			
			accountContainer.append( lAccount );
		}

		accountContainer.append( new Account( () => {
			let accountPrompt = prompt("Account name ?");
			if (!accountPrompt) 
				return;
			
			if (accounts.map(m => m.toLowerCase()).includes(accountPrompt.toLowerCase())) 
			{
				alert(`${accountPrompt} already exists`) 
				return;
			}

			Loader.createAccount(accountPrompt, () => {
				this.setAccountName(accountPrompt);
				lReturn();
			});
		}, () => {}, false).setName("New Account", "+").addClass("new"));
		/* **** ******** */

		let btnRemove = new ButtonElement( () => {
			Account.accountMode = (Account.accountMode === Account.REMOVE ? Account.CLICK : Account.REMOVE);

			if (Account.accountMode === Account.REMOVE)
				btnRemove.addClass("triggered");
			else
				btnRemove.removeClass("triggered");
		});
		btnRemove.setText("Remove");

		actionContainer.append(btnRemove);
	}

	static _showAndLoadAccounts() {
		ScreenElementManager.removeListenersOnAllElements();
		Loader.loadAccounts((accounts) => {
			ScreenManager.showAccounts(accounts);
		});
	}
};

export default ScreenManager;