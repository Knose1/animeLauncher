import HTMLManager from './HTMLManager';
import Loader from '../Loader.js';

class ScreenElementManager {

	/**
	 * @typedef Listener
	 * @property {ScreenElement} elm 
	 * @property {string} type 
	 * @property {function} handeler 
	 * @property {boolean} isStatic 
	 * @memberof ScreenElementManager
	 */

	/**
	 * @type {Listener[]} 
	 */
	static get listeners() {return this._listeners || (this._listeners = [])};

	/**
	 * 
	 * @param {ScreenElement} elm 
	 * @param {string} type 
	 * @param {function} handeler 
	 * @param {boolean} isStatic 
	 */
	static addListener(elm, type, handeler, isStatic = false)
	{
		elm.element.addEventListener(type, handeler);
		this.listeners.push({elm, type, handeler, isStatic});

		return elm;
	}

	static allowStaticListener()
	{
		for (let i = this.listeners.length - 1; i >= 0; i--) {
			let lElement = this.listeners[i];

			if (!lElement.isStatic) 
			{
				continue;
			}

			lElement.elm.element.addEventListener(lElement.type, lElement.handeler);
		}
	}

	/**
	 * 
	 * @param {ScreenElement} elm
	 */
	static removeListeners(elm)
	{
		for (let i = this.listeners.length - 1; i >= 0; i--) {
			let lElement = this.listeners[i];

			if (lElement.elm != elm) continue;
			
			this.listeners.splice(i, 1);
			lElement.elm.element.removeEventListener(lElement.type, lElement.handeler);
		}

		return elm;
	}

	/**
	 * 
	 * @param {ScreenElement} elm 
	 * @param {string} type 
	 */
	static removeListener(elm, type)
	{
		for (let i = this.listeners.length - 1; i >= 0; i--) {
			let lElement = this.listeners[i];

			if (lElement.elm != elm && lElement.type == type) continue;
			
			this.listeners.splice(i, 1);
			lElement.elm.element.removeEventListener(lElement.type, lElement.handeler);
		}
	}

	static removeListenersOnAllElements(removeStatic = false)
	{
		for (let i = this.listeners.length - 1; i >= 0; i--) {
			let lElement = this.listeners[i];

			if (!lElement.isStatic || removeStatic) 
			{
				this.listeners.splice(i, 1);
			}

			lElement.elm.element.removeEventListener(lElement.type, lElement.handeler);
		}
	}
}

/**
 * Base class for any ScreenElement
 * @example 
 * let body = new ScreenElement("div");
 * body.append( new ScreenElement("pre").setText("My text") );
 * 
 * @abstract
 */
class ScreenElement {

	/**
	 * 
	 * @param {string} tagName 
	 */
	constructor(tagName) 
	{
		/**
		 * @type {HTMLElement}
		 */
		this.element = document.createElement(tagName);
	}
	/**
	 * 
	 * @param  {string} txt 
	 */
	setText(txt) 
	{
		this.element.innerText = txt;
		return this;
	}

	/**
	 * 
	 * @param  {(string | ScreenElement)[]} elements 
	 * @param  {(string | ScreenElement)[]} [join]
	 */
	appendList(elements, join = undefined)
	{
		if (join != undefined) 
		{
			for (let i = elements.length - 2; i >= 1; i--) {
				let joinArgs = Array.from(join)
				joinArgs.unshift(i, 0);

				let lElement = elements[i];
				elements.splice.apply(elements, joinArgs);
			}
		}

		this.append.apply(this, elements);
		return this;
	} 

	/**
	 * 
	 * @param  {...string | ScreenElement} elements 
	 */
	append(...elements) 
	{
		for (let i = 0; i < elements.length; i++)
		{
			let elm = elements[i];
			this.element.append(typeof(elm) == "string" ? elm : elm.element);
		}
		return this;
	}

	

	/**
	 * 
	 * @param  {string[]} classes 
	 */
	addClassList(classes)
	{
		this.append.addClass(this, classes);
		return this;
	} 

	/**
	 * 
	 * @param  {...string} classes 
	 */
	addClass(...classes) 
	{
		for (let i = 0; i < classes.length; i++)
		{
			this.element.classList.add(classes[i]);
		}
		return this;
	}

	setId(id)
	{
		this.element.id = id;
		return this;
	}

	clear()
	{
		this.element.innerHTML = "";
		return this;
	}
}

/**
 * Creates a ScreenElenem using an HTMLElement
 */
class ScreenElementFromElement extends ScreenElement {
	
	/**
	 * 
	 * @param {HTMLElement} element 
	 */
	constructor(element)
	{
		super();
		this.element = element;
	}
}

class SrcElement extends ScreenElement 
{
	constructor(tagName, src)
	{
		super(tagName);
		this.setSrc(src);
	}

	setSrc(src)
	{
		this.element.src = src;
	}
}

/**
 * Creates a button element listening to click event
 */
class ButtonElement extends ScreenElement 
{
	/**
	 * 
	 * @param {Function} handeler 
	 * @param {boolean} [isStatic=false] 
	 */
	constructor(handeler, isStatic = false)
	{
		super("button");
		this.handeler = handeler;
		this.isStatic = isStatic;
		this.listen();
	}

	setHandeler(handeler, isStatic = false)
	{
		this.unlisten();
		this.handeler = handeler;
		this.isStatic = isStatic;
		this.listen();
	}

	unlisten() 
	{
		ScreenElementManager.removeListener(this, "click");
	}

	listen() 
	{
		ScreenElementManager.addListener(this, "click", this.handeler, this.isStatic);
	}
}

/**
 * 
 */
class InputElement extends ScreenElement 
{
	/**
	 * 
	 * @param {*} startValue 
	 * @param {string} placeholder
	 */
	constructor(startValue, placeholder)
	{
		super("input");

		/**
		 * @type {HTMLInputElement}
		 */
		this.element;

		this.setValue(startValue);
		this.getValue();
		this.setPlaceolder(placeholder);
	}

	setValue(value)
	{
		this.element.value = value;
		return this;
	}

	getValue()
	{
		this.element.value = value;
	}

	setPlaceolder(placeholder)
	{
		this.element.placeholder = placeholder;
		return this;
	}
}

/**
 * Creates a button element listening to click event
 */
class MenuButtonElement extends ScreenElement 
{
	/**
	 * 
	 * @param {Function} onclick
	 * @param {string} name
	 */
	constructor(name, onclick)
	{
		super("li");
		this.append(
			new ButtonElement(onclick, true)
			.append(
				new ScreenElement("span").setText(name)
			)
		);
	}
}


/*//////////////////////////////////*/
/*        PERSONALISED CLASS        */
/*//////////////////////////////////*/

/**
 * Creates a div with text that indicates progress
 */
class ProgressIndicator extends ScreenElement
{
	constructor()
	{
		super("div")
		this.setProgress(0);
	}

	/**
	 * 
	 * @param {number} p Progress
	 * @returns {this}
	 */
	setProgress(p) 
	{
		this.setText("Progress: "+parseInt(p*100)+"%");
		return this;
	}
}

class AnimeElement extends ScreenElement
{
	/**
	 * @param {*} anime
	 * @param {Function} onclick
	 */
	constructor(anime, onclick)
	{
		super("li");

		this.addClass("anime");
		this.setId(anime.id);
		
		let btn = new ButtonElement(() => {onclick(anime);})
		
		if (anime.thumbnailLink) 
			btn.append(new SrcElement("img", anime.thumbnailLink))
		
		btn.append(new ScreenElement("h1").setText(anime.name))
		this.append(btn);
	}
}

class EpisodeElement extends ScreenElement
{
	/**
	 * @param {*} anime
	 * @param {*} episode
	 * @param {boolean} isEpisodeLocal
	 * @param {Function} onclick
	 */
	constructor(anime, episode, isEpisodeLocal, onclick)
	{
		super("li");

		this.addClass("episode");
		this.setId(`episode ${anime.id}-${episode.episodeId}`);
		
		let btn = new ButtonElement(() => {onclick(anime, episode);})
		
		if (anime.thumbnailLink) 
			btn.append(new SrcElement("img", episode.posterLink))
		
		btn.append(new ScreenElement("h2").setText(episode.name || "Episode " + episode.episodeId));
		this.append(btn);

		if (isEpisodeLocal)
		{
			this.append(new EpisodeWatchButton(anime, episode, "h2"));
		}
	}
}

class EpisodeWatchButton extends ButtonElement
{
	/**
	 * @param {*} anime
	 * @param {*} episode
	 * @param {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"} innerTextElementTag
	 */
	constructor(anime, episode, innerTextElementTag="h4")
	{
		super(() => {
			ScreenElementManager.removeListeners();
			Loader.loadLocalEpisode(anime.id, episode.episodeId);
		});

		this.addClass("watch");
		this.append(new ScreenElement(innerTextElementTag).setText("Watch local"));
	}
}

class ReturnButton extends ButtonElement
{
	/**
	 * @param {Function} handeler
	 */
	constructor(handeler)
	{
		super(handeler);
		this.addClass("return");
		this.append(new ScreenElement("h4").setText("Return"));
	}
}

class DownloadAllButton extends ButtonElement
{
	/**
	 * @param {Function} handeler
	 */
	constructor(handeler)
	{
		super(handeler);
		this.addClass("downloadAll");
		this.append(new ScreenElement("h4").setText("Download All"));
	}
}

class EpisodeInfoElement extends ScreenElement
{
	/**
	 * @param {*} anime
	 * @param {Function} ondownload
	 */
	constructor(info, oncomplete, catchError)
	{
		super("div");

		this.append(
			`Name : ${info.name}`, new ScreenElement("br"),
			`AnimeId : ${info.animeId}`, new ScreenElement("br"),
			`EpisodeId : ${info.episodeId}`, new ScreenElement("br"),
			`PosterLink : ${info.posterLink}`, new ScreenElement("br"),
			`IsLocal : ${info.isLocal}`, new ScreenElement("br"),
			`HasPoster : ${info.hasPoster}`, new ScreenElement("br")
		)

		for (let i = 0; i < info.players.length; i++) {
			const player = info.players[i];
			this.append(new PlayerInfoElement(info, player, i, oncomplete, catchError));
		}
	}
}

class PlayerInfoElement extends ScreenElement
{
	static setCurrentIFrame(src) 
	{
		PlayerInfoElement.closeIframe();
		PlayerInfoElement.currentIframe = new IframeDownloadPromiseElement(src);
		PlayerInfoElement.currentIframe
		.onconfirm( () => {
			PlayerInfoElement.closeIframe();
		})
		.oncancel( () => {
			PlayerInfoElement.closeIframe();
		});

		return PlayerInfoElement.currentIframe;
	}

	constructor(info, player, id, oncomplete, catchError)
	{
		super("div");
		this.addClass("tab-1");
		this.append(
			`URL : ${player.url}`, new ScreenElement("br"),
			`isYoutube : ${Boolean(player.isYoutube)}`, new ScreenElement("br"),
			`isNatif : ${player.player.isNatif}`, new ScreenElement("br"),
			`downloadable : ${player.player.downloadable}`, new ScreenElement("br"),
			`autoDownload : ${player.player.autoDownload}`, new ScreenElement("br"),
			`id : ${player.player.id}`, new ScreenElement("br")
		);

		if (player.ytInfo) 
		{
			let ytdlInfoList = [];
			let formats = player.ytInfo.formats;

			for (let index = 0; index < formats.length; index++) {
				const format = formats[index];
				ytdlInfoList.push(new YtDlFormatElement(format, index, () => {
					ScreenElementManager.removeListeners();
					Loader.download(info.animeId, info.episodeId, player.player.id, player.url, format)
					.then(oncomplete)
					.catch(catchError);
				}));
			}

			this.append(
				new ScreenElement("div").addClass("ytInfo").appendList(ytdlInfoList, [new ScreenElement("br"),new ScreenElement("br")]),
				new ScreenElement("br")
			);
		}
		else if (player.player.autoDownload) {
			this.append(
				new ButtonElement( () => {
					ScreenElementManager.removeListeners();
					dlPromise = Loader.download(info.animeId, info.episodeId, player.player.id, player.url)
					.then(oncomplete)
					.catch(catchError); 
				} )
				.addClass("download","autoDownload")
				.setId(`dl ${id}`)
				.setText("Download")
			);
		}
		else {
			this.append(
				new ButtonElement( () => { 
					/*Iframe*/ 
					if (!PlayerInfoElement.isIFrameAppend) HTMLManager.iframeContainer.append(PlayerInfoElement.currentIframe);
				})
				.addClass("download")
				.setId(`dl ${id}`)
				.setText("Show iFrame for download")
			);
		}
	}

	static closeIframe()
	{
		PlayerInfoElement.currentIframe.removeHandelers();
		PlayerInfoElement.currentIframe = null;
		HTMLManager.iframeContainer.clear();
	}
}

class YtDlFormatElement extends ScreenElement 
{
	constructor(format, index, ondownload) 
	{
		super("div");
		
		this.addClass("tab-1","code");
		this.append(new ScreenElement("pre").addClass("tab-1").setText(JSON.stringify(format,"",3)));
		this.append(
			new ButtonElement( ondownload )
				.addClass("download","yt")
				.setId(index+"-yt")
				.setText("Download")
		);
	}
}

class IframeDownloadPromiseElement extends ScreenElement 
{
	constructor(src) 
	{
		super("div");
		this.srcElm = new SrcElement("iframe", src);
		this.append(
			srcElm,
			new InputElement("", "Video Url"),
			new ButtonElement(() => {
				//Confirm button
				if (!this._confirm) return;
				for (let i = 0; i < this._confirm.length; i++) {
					this._confirm[i](this);
				}
			})
			.append(
				new ScreenElement("h4").setText("Confirm")
			),
			new ScreenElement("br"),
			new ButtonElement(() => {
				//Cansel button
				if (!this._cancel) return;
				for (let i = 0; i < this._cancel.length; i++) {
					this._cancel[i](this);
				}
			})
			.append(
				new ScreenElement("h4").setText("Cansel")
			)
		)
	}

	setSrc(src) 
	{
		this.srcElm.setSrc(src);
	}

	onconfirm(handeler) 
	{
		/**
		 * @type {Function[]}
		 */
		(this._confirm = this._confirm || []).push(handeler);
		return this;
	}

	oncancel(handeler) 
	{
		/**
		 * @type {Function[]}
		 */
		(this._cancel = this._cancel || []).push(handeler);
		return this;
	}

	removeHandelers()
	{
		this._cancel = null;
		this._confirm = null;
	}
}

export 
{
	ScreenElementManager,
	ScreenElement,
	ScreenElementFromElement,
	SrcElement,
	ButtonElement,
	InputElement,
	MenuButtonElement,
	ProgressIndicator,
	AnimeElement,
	EpisodeElement,
	EpisodeWatchButton,
	ReturnButton,
	DownloadAllButton,
	EpisodeInfoElement,
	PlayerInfoElement,
	YtDlFormatElement,
};