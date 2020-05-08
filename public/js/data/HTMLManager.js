import {ScreenElementFromElement} from './ScreenElement';

export default class HTMLManager {
	static init()
	{
		/**
		 * @this HTMLManager
		 */

		this.iframeContainer = document.getElementById("iframeContainer");
		this.body = document.getElementById("body");
		this.buttons = {
			home : document.getElementById("button Home"),
			sitemap : document.getElementById("button Sitemap"),
			newsletter : document.getElementById("button Newsletter"),
			account : document.getElementById("button Account")
		};

		/*this.iframeContainer = new ScreenElementFromElement(document.getElementById("iframeContainer"));
		this.body = new ScreenElementFromElement(document.getElementById("body"));
		this.buttons = {
			home : new ScreenElementFromElement(document.getElementById("button Home")),
			sitemap : new ScreenElementFromElement(document.getElementById("button Sitemap")),
			newsletter : new ScreenElementFromElement(document.getElementById("button Newsletter")),
			account : new ScreenElementFromElement(document.getElementById("button Account"))
		};*/
	}
}