import {ScreenElementFromElement} from './ScreenElement';

export default class HTMLManager {
	static init()
	{
		/**
		 * @this HTMLManager
		 */

		this.iframeContainer = new ScreenElementFromElement(document.getElementById("iframeContainer"));
		this.body = new ScreenElementFromElement(document.getElementById("body"));
		this.menuBar = new ScreenElementFromElement(document.getElementById("menuBar"));
	}
}