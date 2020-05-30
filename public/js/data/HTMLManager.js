import {ScreenElementFromElement} from './ScreenElement.js';

export default class HTMLManager {
	static init()
	{
		/**
		 * @this HTMLManager
		 */

		this.downloadContainer = new ScreenElementFromElement(document.getElementById("downloadContainer"));
		this.iframeContainer = new ScreenElementFromElement(document.getElementById("iframeContainer"));
		this.body = new ScreenElementFromElement(document.getElementById("body"));
		this.menuBar = new ScreenElementFromElement(document.getElementById("menuBar"));
	}
}