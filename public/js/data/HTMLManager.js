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
	}
}