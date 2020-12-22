import HTMLManager from './HTMLManager.js';
import Loader from '../Loader.js';
import ScreenManager from './ScreenManager.js';

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
class ScreenElementManager
{

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
	 * @property {Public.Html.Elements.ScreenElement} elm 
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
	 * @property {Public.Html.Elements.ScreenElementManager.KeyEventHandler} handeler 
	 * @property {string} key
	 * @property {boolean} useFocusInChild 
	 * @memberof Public.Html.Elements.ScreenElementManager
	 */

	/**
	 * @type {Listener[]} 
	 */
	static get listeners() { return this._listeners || (this._listeners = []) };

	/**
	 * @type {KeyListener[]} 
	 */
	static get keyPressListeners() { return this._keyPressListeners || (this._keyPressListeners = []) };

	/**
	 * @type {KeyListener[]} 
	 */
	static get keyDownListeners() { return this._keyDownListeners || (this._keyDownListeners = []) };

	/**
	 * @type {KeyListener[]} 
	 */
	static get keyUpListeners() { return this._keyUpListeners || (this._keyUpListeners = []) };

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
		this.listeners.push({ elm, type, handeler, isStatic });

		return elm;
	}

	static allowStaticListener()
	{
		for (let i = this.listeners.length - 1; i >= 0; i--)
		{
			let lElement = this.listeners[i];

			if (!lElement.isStatic) 
			{
				continue;
			}

			lElement.elm.element.addEventListener(lElement.type, lElement.handeler);
		}

		HTMLManager.loadingOverlay.addClass("disabled");
	}

	/**
	 * 
	 * @param {ScreenElement} elm
	 */
	static removeListeners(elm)
	{
		for (let i = this.listeners.length - 1; i >= 0; i--)
		{
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
		for (let i = this.listeners.length - 1; i >= 0; i--)
		{
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

		for (let i = lArr.length - 1; i >= 0; i--)
		{
			/**
			 * @ignore
			 * @type {Array<ListenerBase>}
			 */
			let lListeners = lArr[i];

			for (let i = lListeners.length - 1; i >= 0; i--)
			{
				let lElement = lListeners[i];

				if (!lElement.isStatic || removeStatic) 
				{
					lListeners.splice(i, 1);
				}

				if (lElement.type) 
				{
					lElement.elm.element.removeEventListener(lElement.type, lElement.handeler);
				}
			}
		}

		HTMLManager.loadingOverlay.removeClass("disabled");
	}

	/**
	 * @public
	 */
	static init() 
	{
		document.addEventListener("keydown", ScreenElementManager._keyDown);
		document.addEventListener("keypress", ScreenElementManager._keyPress);
		document.addEventListener("keyup", ScreenElementManager._keyUp);
	}

	/**
	 * @private
	 * @param {KeyboardEvent} k 
	 */
	static _keyDown(k) 
	{

		for (let i = ScreenElementManager.keyDownListeners.length - 1; i >= 0; i--)
		{
			let lElement = ScreenElementManager.keyDownListeners[i];

			if (k.key != lElement.key) continue;

			//If Focus or Focus in child
			if (lElement.elm.hasFocus || (lElement.useFocusInChild && lElement.elm.hasFocusInChild)) 
			{
				lElement.handeler.call(lElement.elm, k);
			}
		}
	}

	/**
	 * @private
	 * @param {KeyboardEvent} k 
	 */
	static _keyPress(k) 
	{
		for (let i = ScreenElementManager.keyPressListeners.length - 1; i >= 0; i--)
		{
			let lElement = ScreenElementManager.keyPressListeners[i];

			if (k.key != lElement.key) continue;

			//Focus or Focus in child
			if (lElement.elm.hasFocus || (lElement.useFocusInChild && lElement.elm.hasFocusInChild)) 
			{
				lElement.handeler.call(lElement.elm, k);
			}
		}
	}

	/**
	 * @private
	 * @param {KeyboardEvent} k 
	 */
	static _keyUp(k) 
	{
		for (let i = ScreenElementManager.keyUpListeners.length - 1; i >= 0; i--)
		{
			let lElement = ScreenElementManager.keyUpListeners[i];

			if (k.key != lElement.key) continue;

			//Focus or Focus in child
			if (lElement.elm.hasFocus || (lElement.useFocusInChild && lElement.elm.hasFocusInChild)) 
			{
				lElement.handeler.call(lElement.elm, k);
			}
		}
	}

	/**
	 * 
	 * @param {KeyTypeEnum} kl 
	 * @param {ScreenElement} elm 
	 * @param {KeyEventHandler} handeler 
	 * @param {string} key 
	 * @param {boolean} useFocusInChild 
	 */
	static addKeyListener(kl, elm, handeler, key, useFocusInChild) 
	{
		/**
		 * @ignore
		 * @type {KeyListener}
		 */
		let params = { elm, handeler, isStatic: false, key, useFocusInChild };

		switch (kl)
		{
			case ScreenElementManager.KeyTypeEnum.DOWN:
				this.keyDownListeners.push(params);
				break;
			case ScreenElementManager.KeyTypeEnum.PRESS:
				this.keyPressListeners.push(params);
				break;
			case ScreenElementManager.KeyTypeEnum.UP:
				this.keyUpListeners.push(params);
				break;

			default:
				console.warn(`${kl} is not in KeyTypeEnum`);
				return;
		}
	}

	/**
	 * 
	 * @param {KeyTypeEnum} kl 
	 * @param {ScreenElement} elm 
	 * @param {string} key 
	 */
	static removeKeyListener(kl, elm, key) 
	{
		/**
		 * @ignore
		 * @type {Array<KeyListener>}
		 */
		let lKeyListnersArray = null;

		switch (kl)
		{
			case ScreenElementManager.KeyTypeEnum.DOWN:
				lKeyListnersArray = this.keyDownListeners;
				break;
			case ScreenElementManager.KeyTypeEnum.PRESS:
				lKeyListnersArray = this.keyPressListeners;
				break;
			case ScreenElementManager.KeyTypeEnum.UP:
				lKeyListnersArray = this.keyUpListeners;
				break;

			default:
				console.warn(`${kl} is not in KeyTypeEnum`);
				return;
		}

		for (let i = lKeyListnersArray.length - 1; i >= 0; i--)
		{
			let lElement = lKeyListnersArray[i];

			if (lElement.elm != elm || lElement.key != key) continue;

			lKeyListnersArray.splice(i, 1);
		}
	}
}

ScreenElementManager.KeyTypeEnum = KeyTypeEnum;

/**
 * Base class for any ScreenElement
 * @example 
 * let body = new ScreenElement("div");
 * body.append( new ScreenElement("pre").setText("My text") );
 * 
 * @memberof Public.Html.Elements
 */
class ScreenElement
{

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
			join = join.map(m =>
			{
				if (m instanceof Function) return m();
				return m;
			});

			for (let i = elements.length - 2; i >= 1; i--)
			{
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
			this.element.append(typeof (elm) == "string" ? elm : elm.element);
		}
		return this;
	}

	get firstChild() {
		let elm = this.element.firstElementChild;
		return elm ? new ScreenElementFromElement(elm) : null;
	}

	removeFromParent() 
	{
		this.element.remove();
	}

	/**
	 * 
	 */
	get parent() 
	{
		let elm = this.element.parentNode;
		return elm ? new ScreenElementFromElement(elm) : null;
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
		if (this.element === document) return document.hasFocus();

		return Array.from(document.querySelectorAll(":focus")).includes(this.element);
	}

	get hasFocusInChild() 
	{
		if (this.element === document) return document.hasFocus();
		
		return Array.from(this.element.querySelectorAll(":focus")).length > 0;
	}
}

/**
 * Creates a ScreenElement using an HTMLElement
 * @memberof Public.Html.Elements 
 */
class ScreenElementFromElement extends ScreenElement
{

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

	get isFullscreen() { return document.fullscreenElement === this.element }

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

	/**
	 * Gets or sets the current playback position, in seconds.
	 * @type {number}
	 */
	get time() { return this.element.currentTime; }
	set time(value) { this.element.currentTime = value }

	get muted() { return this.element.muted; }

	get volume() 
	{
		return this.element.volume;
	}
	set volume(value) 
	{
		return this.element.volume = value;
	}

	play() 
	{
		this.element.play();
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
	disable(disabled)
	{
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
		this.nameSpan = new ScreenElement("span").setText(name);
		this.append(
			new ButtonElement(onclick, true)
				.append(
					this.nameSpan
				)
		);
	}

	setName(name) 
	{
		this.nameSpan.setText(name);
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
	setUpProgress() { }

	/**
	 * 
	 * @param {number} p Progress
	 * @returns {this}
	 */
	setProgress(p) 
	{
		this.setText("Progress: " + parseInt(p * 100) + "%");
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
		this.progressContent.element.style.width = `${p * 100}%`;
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
	constructor(url, episode, episodeId, nextEpisode, listIsEpisodeLocal, listIsEpisode404, listIsSeen)
	{
		super(url);
		this._episode = episode;
		this._nextEpisode = nextEpisode;
		this._listIsEpisodeLocal = listIsEpisodeLocal;
		this._listIsEpisode404 = listIsEpisode404;
		this._listIsSeen = listIsSeen;


		this.setControls(true)
		this.setAutoplay(false)
		this.setPoster(episode.posterLink || Loader.defaultThumbnailList[episodeId] || `/asset/thumbnail/${episodeId}.png?width:170&height:90&textSize=700`);

		let lFKeyHandle = (k) => { 
			this.toggleFullscreen() 
		};

		let lMKeyHandle = (k) => { 
			this.toggleMute() 
		};
		
		let lArrowUpKeyHandle = (k) => { 
			this.unmute();
			this.volume += k.shiftKey ? 0.01 : 0.1;
			k.preventDefault();
		};
		 
		let lArrowDownKeyHandle = (k) => { 
			this.volume -= k.shiftKey ? 0.01 : 0.1;
			k.preventDefault();
		};
		
		let lNKeyHandle = (k) => {
			if (this._nextEpisode) {
				let isFullscreen = this.isFullscreen;
				this.exitFullscreen();
				
				setTimeout(() =>
				{
					if (confirm("Go to next episode ?")) 
					{
						ScreenElementManager.removeListenersOnAllElements();
						Loader.setSeen(ScreenManager.currentAccount, this._episode.anime.id, this._episode.episodeId, true, () => {
							this._listIsSeen[this._episode.episodeId] = ScreenManager.currentAccount != "";
							Loader.loadLocalEpisode(this._nextEpisode.anime.id, this._nextEpisode.episodeId, this._listIsEpisodeLocal, this._listIsEpisode404, this._listIsSeen);
						});
					}
					else 
					{
						setTimeout(() =>
						{
							this.setFullscreen(isFullscreen);
						}, 100);
					}
				}, 100);
			}
		};

		ScreenElementManager.addKeyListener(ScreenElementManager.KeyTypeEnum.DOWN, HTMLManager.document, lFKeyHandle, "f", true);
		ScreenElementManager.addKeyListener(ScreenElementManager.KeyTypeEnum.DOWN, this, lMKeyHandle, "m", false);
		ScreenElementManager.addKeyListener(ScreenElementManager.KeyTypeEnum.DOWN, this, lArrowUpKeyHandle, "ArrowUp", false);
		ScreenElementManager.addKeyListener(ScreenElementManager.KeyTypeEnum.DOWN, this, lArrowDownKeyHandle, "ArrowDown", false);
		ScreenElementManager.addKeyListener(ScreenElementManager.KeyTypeEnum.DOWN, HTMLManager.document, lNKeyHandle, "n", false);

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

		let btn = new ButtonElement(() => { onclick(anime); })

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
	 * @param {boolean{}} listIsEpisodeLocal True when a local link is declared
	 * @param {boolean{}} listIsEpisode404 True when the mp4 is not in the folder
	 * @param {boolean[]} listIsSeen
	 * @param {Function} onclick
	 */
	constructor(anime, episode, isEpisodeLocal, listIsEpisodeLocal, listIsEpisode404, listIsSeen, onclick)
	{
		super("li");

		if (listIsSeen[episode.episodeId]) 
		{
			this.addClass("seen");
		}

		this.addClass("episode");
		this.setId(`episode ${anime.id}-${episode.episodeId}`);

		let btn = new ButtonElement(() => { onclick(anime, episode); })

		if (anime.thumbnailLink)
			btn.append(new SrcElement("img", episode.posterLink))

		btn.append(new ScreenElement("h2").setText(episode.name || "Episode " + episode.episodeId));
		this.append(btn);

		if (isEpisodeLocal)
		{
			this.append(new EpisodeWatchButton(anime, episode, listIsEpisodeLocal, listIsEpisode404, listIsSeen, "h2"));
		}
	}
}

/**
 * A button to watch the episode
 * @memberof Public.Html.Elements.Personalised
 */
class EpisodeWatchButton extends ButtonElement
{
	static get WATCH_LOCAL() { return "Watch local" };
	static get CLASS_WATCH() { return "watch" };
	static get CLASS_WATCH404() { return "watch404" };

	/**
	 * @param {*} anime
	 * @param {*} episode
	 * @param {Boolean[]} listIsEpisodeLocal A list to know when the
	 * @param {Boolean[]} listIsEpisode404 True when server respond 404
	 * @param {Boolean[]} listIsSeen 
	 * @param {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"} innerTextElementTag
	 */
	constructor(anime, episode, listIsEpisodeLocal, listIsEpisode404, listIsSeen, innerTextElementTag = "h4")
	{
		function onClick()
		{
			ScreenElementManager.removeListeners();
			Loader.loadLocalEpisode(anime.id, episode.episodeId, listIsEpisodeLocal, listIsEpisode404, listIsSeen);
		}

		super(onClick);

		if (listIsSeen[episode.episodeId]) 
		{
			this.addClass("seen");
		}

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

		for (let i = 0; i < info.players.length; i++)
		{
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
			.onEnd(() =>
			{
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
				new ButtonElement(() =>
				{
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

			for (let index = 0; index < formats.length; index++)
			{
				const format = formats[index];
				ytdlInfoList.push(new YtDlFormatElement(format, index, () =>
				{
					ScreenElementManager.removeListeners();
					Loader.download(info.animeId, info.episodeId, player.player.id, player.url, format)
						.then(oncomplete)
						.catch(catchError);
				}));
			}

			this.append(
				new ScreenElement("div").addClass("ytInfo").appendList(ytdlInfoList, [new ScreenElement("br"), new ScreenElement("br")]),
				new ScreenElement("br")
			);
		}
		else if (player.player.autoDownload)
		{
			this.append(
				new ButtonElement(() =>
				{
					ScreenElementManager.removeListeners();
					dlPromise = Loader.download(info.animeId, info.episodeId, player.player.id, player.url)
						.then(oncomplete)
						.catch(catchError);
				})
					.addClass("download", "autoDownload")
					.setId(`dl ${id}`)
					.setText("Download")
			);
		}
		else
		{
			this.append(
				new ButtonElement(() =>
				{
					/*Iframe*/
					PlayerInfoElement.setCurrentIFrame(player.url)
						.onconfirm((it) =>
						{
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
		if (PlayerInfoElement.currentIframe) PlayerInfoElement.currentIframe.removeHandelers();
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

		this.addClass("tab-1", "code");
		this.append(new ScreenElement("pre").addClass("tab-1").setText(JSON.stringify(format, "", 3)));
		this.append(
			new ButtonElement(ondownload)
				.addClass("download", "yt")
				.setId(index + "-yt")
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
			new ButtonElement(() =>
			{
				//Confirm button
				if (this._confirm)
				{
					let arr = this._confirm;

					for (let i = 0; i < arr.length; i++)
					{
						arr[i](this);
					}
				}

				this.sendOnEnd();
			})
				.append(
					new ScreenElement("h4").setText("Confirm")
				),
			new ButtonElement(() =>
			{
				//Cansel button
				if (this._cancel)
				{
					let arr = this._cancel;

					for (let i = 0; i < arr.length; i++)
					{
						arr[i](this);
					}
				}

				this.sendOnEnd();
			})
				.append(
					new ScreenElement("h4").setText("Cansel")
				),
			new ButtonElement(() =>
			{
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

		for (let i = 0; i < arr.length; i++)
		{
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

/**
 * Layout for account
 * @memberof Public.Html.Elements.Personalised
 */
class Account extends ButtonElement 
{
	/**
	 * @public
	 * @type {Array<Account>}
	 */
	static get list() {
		let list = Account._getList();
		for (let i = list.length - 1; i >= 0; i--) {
			let lElement = list[i];
			if (lElement.parent === null) list.splice(i, 1);
		}

		return list;
	}

	/**
	 * @private
	 * @return {Array<Account>}
	 */
	static _getList() {return this._list || (this._list = [])}

	/**
	 * @type {number}
	 */
	static get accountMode() {return Account._accountMode}
	static set accountMode(value) {
		let list = Account.list;
		for (let i = list.length - 1; i >= 0; i--) {
			let lElement = list[i];
			lElement.removeClass("modeClick", "modeRemove");
			switch (value) {
				case Account.CLICK:
					lElement.addClass("modeClick");
					break;
					
				case Account.REMOVE:
					lElement.addClass("modeRemove");
					break;
			}
		}

		return Account._accountMode = value;
	}

	static get CLICK() {return 0}
	static get REMOVE() {return 1}

	/**
	 * 
	 * @param {Function} clickHandler 
	 * @param {Function} removeHandler 
	 * @param {boolean} isStatic 
	 */
	constructor(clickHandler, removeHandler, isStatic) 
	{
		if (Account.accountMode === undefined) Account.accountMode = Account.CLICK;

		let handler = () => {
			switch (Account.accountMode) {
				case Account.CLICK:
					clickHandler();
					break;
					
				case Account.REMOVE:
					removeHandler();
					break;
			
				default:
					break;
			}
		}
		super(handler, isStatic);

		Account.list.push(this);

		this.addClass("account");

		switch (Account.accountMode) {
			case Account.CLICK:
				this.addClass("modeClick");
				break;
				
			case Account.REMOVE:
				this.addClass("modeRemove");
				break;
		}
		

		
		/**
		 * @type {ScreenElement}
		 */
		this.circle = new ScreenElement("div").addClass("circle");

		/**
		 * @type {ScreenElement}
		 */
		this.text = new ScreenElement("div").addClass("name");

		this.append(
			this.circle,
			this.text
		);
	}

	/**
	 * 
	 * @param {string} name 
	 * @param {string} buttonName
	 * @returns {Account}
	 */
	setName(name, buttonName = "") {

		name.replace(/^./g, name[0].toUpperCase());

		if (!buttonName) buttonName = name[0];
		else buttonName = buttonName.toUpperCase();

		this.text.setText(name);
		this.circle.setText(buttonName);

		return this;
	}
}

/**
 * Time information for simultaneous watch
 */
class VideoTime extends ScreenElement
{
	/**
	 * @public
	 * @type {VideoTime}
	 */
	static get instance() {
		/**
		 * @ignore 
		 * @type {VideoTime}
		 */
		let inst = VideoTime._instance;
		if (inst && !inst.parent) 
		{
			return VideoTime._instance = null;
		}

		return inst;
	}

	constructor(animeId, episodeId) 
	{
		super("div");

		/**
		 * @type {Number}
		 */
		this.animeId = animeId
		/**
		 * @type {Number}
		 */
		this.episodeId = episodeId

		this.addClass("VideoTime");

		if (VideoTime._instance) VideoTime._instance.removeFromParent();

		/**
		 * @static
		 * @private 
		 * @type {VideoTime}
		 */
		VideoTime._instance = this;
	}

	update(data) {
		this.clear();

		let activities = data.activities;
		let accounts = data.accounts;

		for (let i = accounts.length - 1; i >= 0; i--) {
			let lName = accounts[i];
			if (lName === ScreenManager.currentAccount) continue;

			let lActivity = activities[lName];
			let lAnimeId = Number.parseInt(lActivity.animeId); 
			let lEpisodeId = Number.parseInt(lActivity.episodeId);
			let lVideoTime = Number.parseFloat(lActivity.videoTime); //in sec
			let lDate = lActivity.date / 1000; //from milisec to sec

			
			if (lAnimeId != this.animeId) continue;
			if (lEpisodeId != this.episodeId) continue;
			if ((Date.now() / 1000 - lDate) > 10) continue;

			this.append(
				new VideoTimeElm(lName, lVideoTime, lDate)
			);
		}
	}
}

class VideoTimeElm extends ScreenElement {
	constructor(name, videoTime, date) 
	{
		super("span");
		let endTime = (Date.now() / 1000) - date + videoTime;
		let dateTime = new Date(endTime * 1000 - 3600000);
		let btn = new ButtonElement( () => {
			
			endTime = (Date.now() / 1000) - date + videoTime;
			dateTime = new Date(endTime * 1000 - 3600000)
			
			btn.setText(dateTime.toLocaleTimeString());

			if (ScreenManager.currentVideo) {
				ScreenManager.currentVideo.time = endTime;
				ScreenManager.currentVideo.play();
			}
		}).setText(dateTime.toLocaleTimeString())	
		this.append(
			name,
			btn
		)
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
	EpisodeDlErrorProgress,
	Account,
	VideoTime
};