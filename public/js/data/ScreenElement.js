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
	 * @param  {ScreenElement[]} elements 
	 */
	appendList(elements)
	{
		this.append.apply(this, elements);
		return this;
	} 

	/**
	 * 
	 * @param  {...ScreenElement} elements 
	 */
	append(...elements) 
	{
		for (let i = 0; i < elements.length; i++)
		{
			this.element.append(elements[i].element);
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

class AnimeElement extends ScreenElement
{
	/**
	 * @param {*} anime
	 * @param {Function} onclick
	 */
	constructor(anime, onclick)
	{
		super("li");

		let thumbnail = anime.thumbnailLink ? `<img src="${anime.thumbnailLink}"/>` : "";
		this.addClass("anime");
		this.setId(anime.id);
		this.append(
			new ButtonElement(() => {onclick(anime);})
			.setText(thumbnail)
			.append(new ScreenElement("h1").setText(anime.name))
		);
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

		let poster = episode.posterLink ? `<img src="${episode.posterLink}"/>` : "";
		this.addClass("episode");
		this.setId(`episode ${anime.id}-${episode.episodeId}`);
		this.append(
			new ButtonElement(() => {onclick(anime, episode);})
			.setText(poster)
			.append(new ScreenElement("h2").setText(episode.name || "Episode " + episode.episodeId))
		);

		if (isEpisodeLocal)
		{
			this.append(new EpisodeWatchButton(anime, episode));
		}
	}
}

class EpisodeWatchButton extends ButtonElement
{
	/**
	 * @param {*} anime
	 * @param {*} episode
	 */
	constructor(anime, episode)
	{
		super(() => {
			ScreenElementManager.removeListeners();
			Loader.loadLocalEpisode(anime.id, episode.episodeId);
		});

		this.addClass("watch");
		this.append(new ScreenElement("h2").setText("Watch local"));
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
		this.setText("Return");
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
		this.setText("Download All");
	}
}

export 
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
};