import {ScreenElement, ScreenElementFromElement} from './ScreenElement.js';

/**
 * @memberof Public.Html
 */
class HTMLManager {
	/**
	 * @this HTMLManager
	 */
	static init()
	{
		
		this.document = new ScreenElementFromElement(document);
		this.title = new ScreenElementFromElement(document.getElementById("title"));
		this.downloadContainer = new ScreenElementFromElement(document.getElementById("downloadContainer"));
		this.iframeContainer = new ScreenElementFromElement(document.getElementById("iframeContainer"));
		this.body = new ScreenElementFromElement(document.getElementById("body"));
		this.menuBar = new ScreenElementFromElement(document.getElementById("menuBar"));

		/**
		 * To add an overlay, you should define it in index.html
		 * @deprecated
		 */
		this.overlay = new ScreenElementFromElement(document.getElementById("overlay"));
		
		this.accountOverlay = new ScreenElementFromElement(document.getElementById("accounts"));
		this.loadingOverlay = new ScreenElementFromElement(document.getElementById("loading"));
	}
}

export default HTMLManager;