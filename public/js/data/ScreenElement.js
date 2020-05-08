class ScreenElementManager {

	/**
	 * @type {Function}
	 */
	static set addListener(value) {ScreenElementManager._addListener = value;}
	static get addListener() {return ScreenElementManager._addListener}

	/**
	 * @type {Function}
	 */
	static set allowStaticListener(value) {ScreenElementManager._allowStaticListener = value;}
	static get allowStaticListener() {return ScreenElementManager._allowStaticListener}
	
	/**
	 * @type {Function}
	 */
	static set removeListeners(value) {ScreenElementManager._removeListeners = value;}
	static get allowStaticListener() {return ScreenElementManager._removeListeners}
}

/**
 * Base class for any ScreenElement
 * @example 
 * let  = new ScreenElement();
 * let body = new ScreenElement("div");
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
	 * @param  {...HTMLElement} elements 
	 */
	append(...elements) 
	{
		for (let i = 0; i < elements.length; i++)
		{
			this.element.append(elements[i]);
		}
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
		this.element = element;
	}
}

class GenerateThumbnailIndicator extends ScreenElement
{
	constructor()
	{
		super("p");
		this.element.innerText = "Generating default episode thumbnail please wait..."
	}
}

class ProgressIndicator extends ScreenElement
{
	constructor()
	{
		super("div")
		setProgress(0);
	}

	/**
	 * 
	 * @param {number} p 
	 */
	setProgress(p) 
	{
		this.element.innerText = "Progress: "+(p*100)+"%";
	}
}

export 
{
	ScreenElementManager,
	ScreenElementFromElement,
	GenerateThumbnailIndicator,
	ProgressIndicator
};