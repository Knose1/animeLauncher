import {ScreenElementFromElement} from './ScreenElement.js';

/**
 * @memberof Public.Html
 */
class HTMLManager {
	static init()
	{
		/**
		 * @this HTMLManager
		 */

		this.title = new ScreenElementFromElement(document.getElementById("title"));
		this.downloadContainer = new ScreenElementFromElement(document.getElementById("downloadContainer"));
		this.iframeContainer = new ScreenElementFromElement(document.getElementById("iframeContainer"));
		this.body = new ScreenElementFromElement(document.getElementById("body"));
		this.menuBar = new ScreenElementFromElement(document.getElementById("menuBar"));
		this.overlay = new ScreenElementFromElement(document.getElementById("overlay"));
	}
}

export default HTMLManager;