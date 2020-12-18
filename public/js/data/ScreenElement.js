import HTMLManager from './HTMLManager.js';
import Loader from '../Loader.js';

const DOWN = 0;
const PRESS = 1;
const UP = 2;

/**
 * @readonly
 * @enum {number}
 * @memberof Public.Html.Elements.ScreenElementManager
 */
let KeyTypeEnum = 
{
	/**
	 * 0
	 */
	DOWN,

	/**
	 * 1
	 */
	PRESS,

	/**
	 * 2
	 */
	UP
}

/**
 * @memberof Public.Html.Elements
 */
class ScreenElementManager {

	/**
	 * @callback KeyEventHandler
	 * @param {KeyboardEvent} ev
	 * @returns {void}
	 * @memberof Public.Html.Elements.ScreenElementManager
	 */

	/**
	 * @public
	 * @typedef ListenerBase
	 * @property {boolean} isStatic 
	 * @memberof Public.Html.Elements.ScreenElementManager
	 */
	
	/**
	 * @public
	 * @extends Public.Html.Elements.ScreenElementManager.ListenerBase
	 * @typedef Listener
	 * @property {Public.Html.Elements.ScreenElement} elm 
	 * @property {string} type 
	 * @property {function} handeler 
	 * @property {boolean} isStatic 
	 * @memberof Public.Html.Elements.ScreenElementManager
	 */
	
	/**
	 * @public
	 * @extends Public.Html.Elements.ScreenElementManager.ListenerBase
	 * @typedef KeyListener
	 * @property {Public.Html.Elements.ScreenElement} elm 
	 * @property {Public.Html.Elements.KeyEventHandler} handeler 
	 * @property {boolean} isStatic 
	 * @property {boolean} useFocusInChild 
	 * @memberof Public.Html.Elements.ScreenElementManager
	 */

	/**
	 * @type {Listener[]} 
	 */
	static get listeners() {return this._listeners || (this._listeners = [])};

	/**
	 * @type {KeyListener[]} 
	 */
	static get keyPressListeners() {return this._keyPressListeners || (this._keyPressListeners = [])};

	/**
	 * @type {KeyListener[]} 
	 */
	static get keyDownListeners() {return this._keyDownListeners || (this._keyDownListeners = [])};

	/**
	 * @type {KeyListener[]} 
	 */
	static get keyUpListeners() {return this._keyUpListeners || (this._keyUpListeners = [])};

	/**
	 * Add a listener to an element
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
		
		HTMLManager.overlay.addClass("disabled");
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

	/**
	 * 
	 * @param {boolean} removeStatic 
	 */
	static removeListenersOnAllElements(removeStatic = false)
	{
		let lArr = [this.keyPressListeners, this.keyDownListeners, this.keyUpListeners, this.listeners];

		for (let i = lArr.length - 1; i >= 0; i--) {
			let lElement = lArr[i];
		}
		for (let i = this.listeners.length - 1; i >= 0; i--) {
			let lElement = this.listeners[i];

			if (!lElement.isStatic || removeStatic) 
			{
				this.listeners.splice(i, 1);
			}

			lElement.elm.element.removeEventListener(lElement.type, lElement.handeler);
		}
		
		HTMLManager.overlay.removeClass("disabled");
	}

	static init() 
	{
		document.addEventListener("keydown", _keyDown);
		document.addEventListener("keypress", _keyPress);
		document.addEventListener("keyup", _keyUp);
	}

	/**
	 * 
	 * @param {KeyboardEvent} k 
	 */
	static _keyDown(k) 
	{
		for (let i = this.keyDownListeners.length - 1; i >= 0; i--) {
			let lElement = this.keyDownListeners[i];

			//Focus or Focus in child
			if (lElement.elm.hasFocus || (lElement.useFocusInChild && lElement.elm.hasFocusInChild)) 
			{
				lElement.handeler.call(lElement.elm, k);
			}
		}
	}

	/**
	 * 
	 * @param {KeyboardEvent} k 
	 */
	static _keyPress(k) 
	{
		for (let i = this.keyPressListeners.length - 1; i >= 0; i--) {
			let lElement = this.keyPressListeners[i];
			
			//Focus or Focus in child
			if (lElement.elm.hasFocus || (lElement.useFocusInChild && lElement.elm.hasFocusInChild)) 
			{
				lElement.handeler.call(lElement.elm, k);
			}
		}
	}

	/**
	 * 
	 * @param {KeyboardEvent} k 
	 */
	static _keyUp(k) 
	{
		for (let i = this.keyUpListeners.length - 1; i >= 0; i--) {
			let lElement = this.keyUpListeners[i];

			//Focus or Focus in child
			if (lElement.elm.hasFocus || (lElement.useFocusInChild && lElement.elm.hasFocusInChild)) 
			{
				lElement.handeler.call(lElement.elm, k);
			}
		}
	}

	/**
	 * 
	 * @param {ScreenElementManager.KeyTypeEnum} kl 
	 */
	static AddKeyListener(kl) 
	{
		switch (kl) {
			case ScreenElementManager.KeyTypeEnum.DOWN:
				
				break;
			case KeyTypeEnum.PRESS:
				
				break;
			case KeyTypeEnum.UP:
				
				break;
		
			default:
				console.warn(`${kl} is not in KeyTypeEnum`);
				break;
		}
	}
}

/**
 * Base class for any ScreenElement
 * @example 
 * let body = new ScreenElement("div");
 * body.append( new ScreenElement("pre").setText("My text") );
 * 
 * @memberof Public.Html.Elements
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
	 * @param  {Array<string | ScreenElement>} elements 
	 * @param  {Array<string | ScreenElement | function>} [join]
	 */
	appendList(elements, join = undefined)
	{
		if (join != undefined) 
		{
			join = join.map(m => {
				if (m instanceof Function) return m();
				return m;
			});

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

	/**
	 * 
	 * @param  {...string} classes 
	 */
	removeClass(...classes) 
	{
		for (let i = 0; i < classes.length; i++)
		{
			this.element.classList.remove(classes[i]);
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

	focus() 
	{
		this.element.focus();
	}

	blur() 
	{
		this.element.blur();
	}

	get hasFocus() 
	{
		return Array.from(document.querySelectorAll(":focus")).includes(this.element);
	}

	get hasFocusInChild() 
	{
		return Array.from(this.element.querySelectorAll(":focus")).includes(this.element);
	}
}

/**
 * Creates a ScreenElement using an HTMLElement
 * @memberof Public.Html.Elements 
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

/**
 * Creates a screenElement that has a SRC attribute
 * @memberof Public.Html.Elements 
 */
class SrcElement extends ScreenElement 
{
	/**
	 * 
	 * @param {string} tagName 
	 * @param {string} src 
	 */
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
 * @extends SrcElement
 */
class VideoElement extends SrcElement 
{
	constructor(src)
	{
		super("video", src);

		/**
		 * @type {HTMLVideoElement}
		 */
		this.element;
	}

	/**
	 * 
	 * @param {boolean} bool 
	 */
	setControls(bool)
	{
		this.element.controls = bool;
		return this;
	}

	/**
	 * 
	 * @param {boolean} bool 
	 */
	setAutoplay(bool)
	{
		this.element.autoplay = bool;
		return this;
	}

	/**
	 * 
	 * @param {string} src 
	 */
	setPoster(src)
	{
		this.element.poster = src;
		return this;
	}

	get isFullscreen() {return document.fullscreenElement === this.element}

	setFullscreen(value) 
	{
		value ? this.requestFullscreen() : this.exitFullscreen();
	}

	requestFullscreen() 
	{
		if (!this.isFullscreen) 
		{
			this.element.requestFullscreen();
			this.focus();
		}
	}
	
	exitFullscreen() 
	{
		if (this.isFullscreen) 
		{
			document.exitFullscreen();
		}
	}

	toggleFullscreen() 
	{
		this.setFullscreen(!this.isFullscreen);
	}
	
	get muted() {return this.element.muted;}

	get volume() 
	{
		return this.element.volume;
	}
	set volume(value) 
	{
		return this.element.volume = value;
	}

	toggleMute() 
	{
		this.mute(!this.muted);
	}

	mute(value = true) 
	{
		this.element.muted = value;
	}

	unmute() 
	{
		this.mute(false);
	}
}

/**
 * Creates a button element listening to click event
 * @memberof Public.Html.Elements 
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

		/**
		 * @type {HTMLButtonElement}
		 */
		this.element;

		this.listen();
	}

	/**
	 * 
	 * @param {Boolean} disabled 
	 */
	disable(disabled) {
		this.element.disabled = disabled;
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
 * Creates an input
 * @memberof Public.Html.Elements 
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
		return this.element.value;
	}

	setPlaceolder(placeholder)
	{
		this.element.placeholder = placeholder;
		return this;
	}
}

/**
 * Creates button in the main menu (top bar)
 * @memberof Public.Html.Elements 
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

/**
 * Creates a div with text that indicates progress
 * @memberof Public.Html.Elements 
 * @abstract
 */
class ProgressIndicator extends ScreenElement
{
	constructor()
	{
		super("div");

		this.setUpProgress();

		this.setProgress(0);
	}

	/**
	 * @virtual
	 * @protected
	 * @abstract
	 */
	setUpProgress(){}

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

/**
 * Creates a div with a bar that indicates progress
 * @memberof Public.Html.Elements
 */
class ProgressBarIndicator extends ProgressIndicator
{
	constructor()
	{
		super();
	}

	/**
	 * @virtual
	 * @protected
	 */
	setUpProgress()
	{
		this.addClass("external");
		this.progressContent = new ScreenElement("div").addClass("content");

		this.append(this.progressContent);
	}

	/**
	 * 
	 * @param {number} p Progress
	 * @returns {this}
	 */
	setProgress(p) 
	{
		this.progressContent.element.style.width=`${p*100}%`;
		return this;
	}
}


/*//////////////////////////////////*/
/*        PERSONALISED CLASS        */
/*//////////////////////////////////*/

/**
 * @extends VideoElement
 */
class AnimeVideoElement extends VideoElement 
{
	constructor(url, episode, episodeId, nextEpisode,  listIsEpisodeLocal, listIsEpisode404) {
		super(url);

		this._nextEpisode = nextEpisode;
		this._listIsEpisodeLocal = listIsEpisodeLocal;
		this._listIsEpisode404 = listIsEpisode404;


		this.setControls(true)
		this.setAutoplay(false)
		this.setPoster(episode.posterLink || Loader.defaultThumbnailList[episodeId] || `/asset/thumbnail/${episodeId}.png?width:170&height:90&textSize=700`);
		
		ScreenElementManager.addListener(HTMLManager.document, "keydown", (f) => {this.onKey(f);});
	}

	/**
	 * @private
	 * @param {KeyboardEvent} k 
	 * @this {AnimeVideoElement}
	 */
	onKey(k) 
	{
		if (k.key === "f") {
			this.toggleFullscreen();
		}

		else if (this.hasFocus && k.key === "m") {
			this.toggleMute();
		}

		else if (this.hasFocus && k.key === "ArrowUp") {
			this.unmute();
			this.volume += k.shiftKey ? 0.01 : 0.1;
			k.preventDefault();
		}

		else if (this.hasFocus && k.key === "ArrowDown") {
			this.unmute();
			this.volume -= k.shiftKey ? 0.01 : 0.1;
			k.preventDefault();
		}

		else if (this._nextEpisode && k.key === "n") {
			let isFullscreen = this.isFullscreen;
			this.exitFullscreen();
			
			setTimeout(() => {
				if (confirm("Go to next episode ?")) 
				{
					ScreenElementManager.removeListenersOnAllElements();
					Loader.loadLocalEpisode(this._nextEpisode.anime.id, this._nextEpisode.episodeId, this._listIsEpisodeLocal, this._listIsEpisode404);
				}
				else 
				{
					setTimeout(() => {
						this.setFullscreen(isFullscreen);
					}, 100);
				}
			}, 100);
		}
	}
}

/**
 * An anime button in the anime list
 * @memberof Public.Html.Elements.Personalised
 */
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

/**
 * An episode button in the anime's episode list
 * @memberof Public.Html.Elements.Personalised
 */
class EpisodeElement extends ScreenElement
{
	/**
	 * @param {*} anime
	 * @param {*} episode
	 * @param {boolean} isEpisodeLocal
	 * @param {boolean} listIsEpisodeLocal True when a local link is declared
	 * @param {boolean} listIsEpisode404 True when the mp4 is not in the folder
	 * @param {Function} onclick
	 */
	constructor(anime, episode, isEpisodeLocal, listIsEpisodeLocal, listIsEpisode404, onclick)
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
			this.append(new EpisodeWatchButton(anime, episode, listIsEpisodeLocal, listIsEpisode404, "h2"));
		}
	}
}

/**
 * A button to watch the episode
 * @memberof Public.Html.Elements.Personalised
 */
class EpisodeWatchButton extends ButtonElement
{
	static get WATCH_LOCAL() {return "Watch local"};
	static get CLASS_WATCH() {return "watch"};
	static get CLASS_WATCH404() {return "watch404"};

	/**
	 * @param {*} anime
	 * @param {*} episode
	 * @param {Boolean[]} listIsEpisodeLocal A list to know when the
	 * @param {Boolean[]} listIsEpisode404 True when server respond 404
	 * @param {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"} innerTextElementTag
	 */
	constructor(anime, episode, listIsEpisodeLocal, listIsEpisode404, innerTextElementTag="h4")
	{
		function onClick() {
			ScreenElementManager.removeListeners();
			Loader.loadLocalEpisode(anime.id, episode.episodeId, listIsEpisodeLocal, listIsEpisode404);
		}

		super(onClick);

		this.addClass(EpisodeWatchButton.CLASS_WATCH);
		
		let innerTextElm = new ScreenElement(innerTextElementTag).setText(EpisodeWatchButton.WATCH_LOCAL);
		
		if (listIsEpisode404[episode.episodeId]) 
		{
			this.disable(true);
			this.addClass(EpisodeWatchButton.CLASS_WATCH404);
		}
		
		this.append(innerTextElm);
	}
}

/**
 * A button to return to previous screen 
 * @memberof Public.Html.Elements.Personalised
 */
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

/**
 * A button to download all the episodes
 * @memberof Public.Html.Elements.Personalised
 * @deprecated
 */
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

/**
 * A text that contains infos about the episode
 * @memberof Public.Html.Elements.Personalised
 */
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

/**
 * A text that contains infos about the videoplayer
 * @memberof Public.Html.Elements.Personalised
 */
class PlayerInfoElement extends ScreenElement
{
	/**
	 * 
	 * @param {string} src
	 * @returns {IframeDownloadPromiseElement}
	 */
	static setCurrentIFrame(src) 
	{
		PlayerInfoElement.closeIframe();
		
		
		PlayerInfoElement.currentIframe = new IframeDownloadPromiseElement(src);
		PlayerInfoElement.currentIframe
		.onEnd( () => {
			PlayerInfoElement.closeIframe();
		});

		HTMLManager.iframeContainer.append(PlayerInfoElement.currentIframe);

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

		if (!player.player.downloadable)
		{
			this.append(
				new ButtonElement(() => {
					open(player.url, "_blank ", "toolbar=no,menubar=no", false)
				})
				.addClass("iframe-watch")
				.setText("Watch in iFrame")
			)
		}
		else if (player.ytInfo) 
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
					PlayerInfoElement.setCurrentIFrame(player.url)
					.onconfirm((it) => {
						alert(`URL : "${it.inputElm.getValue()}"`);
						Loader.download(info.animeId, info.episodeId, player.player.id, it.inputElm.getValue())
						.then(oncomplete)
						.catch(catchError);
					});
				})
				.addClass("download")
				.setId(`dl ${id}`)
				.setText("Show iFrame for download")
			);
		}
	}

	static closeIframe()
	{
		if(PlayerInfoElement.currentIframe) PlayerInfoElement.currentIframe.removeHandelers();
		PlayerInfoElement.currentIframe = null;
		HTMLManager.iframeContainer.clear();
	}
}

/**
 * A text that formats ytdl string
 * @memberof Public.Html.Elements.Personalised
 */
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

/**
 * An element that opens an Iframe and wait for user input
 * @memberof Public.Html.Elements.Personalised
 */
class IframeDownloadPromiseElement extends ScreenElement 
{
	/**
	 * @callback onConfirmCb
	 * @param {IframeDownloadPromiseElement} th this
	 * @returns {void}
	 * @memberof IframeDownloadPromiseElement
	 */
	
	 /**
	 * @callback onCancelCb
	 * @param {IframeDownloadPromiseElement} th this
	 * @returns {void}
	 * @memberof IframeDownloadPromiseElement
	 */
	
	 /**
	 * @callback onEndCb
	 * @returns {void}
	 * @memberof IframeDownloadPromiseElement
	 */

	/**
	 * 
	 * @param {string} src 
	 */
	constructor(src) 
	{
		super("div");
		this.srcElm = new SrcElement("iframe", src);
		this.inputElm = new InputElement("", "Video Url");
		this.append(
			this.srcElm,
			this.inputElm,
			new ButtonElement(() => {
				//Confirm button
				if (this._confirm) {
					let arr = this._confirm;

					for (let i = 0; i < arr.length; i++) {
						arr[i](this);
					}
				}
				
				this.sendOnEnd();
			})
			.append(
				new ScreenElement("h4").setText("Confirm")
			),
			new ButtonElement(() => {
				//Cansel button
				if (this._cancel) {
					let arr = this._cancel;
	
					for (let i = 0; i < arr.length; i++) {
						arr[i](this);
					}
				}

				this.sendOnEnd();
			})
			.append(
				new ScreenElement("h4").setText("Cansel")
			),
			new ButtonElement(() => {
				open(src, "_blank ", "toolbar=no,menubar=no", false)
			})
			.append(
				new ScreenElement("h4").setText("Open Iframe in new tab")
			),
			new ScreenElement("hr")
		)
	}

	/**
	 * 
	 * @param {string} src 
	 */
	setSrc(src) 
	{
		this.srcElm.setSrc(src);
	}

	/**
	 * 
	 * @param {onConfirmCb} handeler 
	 */
	onconfirm(handeler) 
	{
		/**
		 * @type {onConfirmCb[]}
		 */
		(this._confirm = this._confirm || []).push(handeler);
		return this;
	}

	/**
	 * 
	 * @param {onCancelCb} handeler 
	 */
	oncancel(handeler) 
	{
		/**
		 * @type {onCancelCb[]}
		 */
		(this._cancel = this._cancel || []).push(handeler);
		return this;
	}

	/**
	 * 
	 * @param {onEndCb} handeler 
	 */
	onEnd(handeler) 
	{
		/**
		 * @type {onEndCb[]}
		 */
		(this._end = this._end || []).push(handeler);
		return this;
	}

	/**
	 * @protected
	 */
	sendOnEnd() 
	{
		if (!this._end) return;

		let arr = this._end;

		for (let i = 0; i < arr.length; i++) {
			arr[i]();
		}
	}

	removeHandelers()
	{
		this._cancel = null;
		this._confirm = null;
		this._end = null;
	}
}

/**
 * A progressbar fo
 * @memberof Public.Html.Elements.Personalised
 */
class EpisodeDlProgress extends ScreenElement 
{
	/**
	 * 
	 * @param {string} name 
	 * @param {number} progress 
	 */
	constructor(name, progress)
	{
		super("div");
		
		this.progressBar = new ProgressBarIndicator().setProgress(progress); 
		this.progressText = new ProgressIndicator().setProgress(progress);
		
		this.append(
			this.progressBar,
			this.progressText,
			" - " + name
		);
	}
}

/**
 * When an episode has errors
 * @memberof Public.Html.Elements.Personalised
 */
class EpisodeDlErrorProgress extends ScreenElement 
{
	/**
	 * 
	 * @param {string} name 
	 * @param {string} error 
	 */
	constructor(name, error)
	{
		super("div");
		
		this.nameElm = new ScreenElement("span").addClass("dlError").setText(name); 
		this.errorElm = new ScreenElement("span").setText(error);
		
		this.append(
			this.nameElm,
			this.errorElm,
		);
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
	EpisodeDlErrorProgress
};