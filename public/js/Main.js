import Loader from './Loader.js';
import HTMLManager from './data/HTMLManager.js';
import ScreenManager from './data/ScreenManager.js';

/**
 * @namespace Public
 */
/**
 * @namespace Common
 * @memberof Public
 */
/**
 * @namespace Html
 * @memberof Public
 */
/**
 * @namespace Elements
 * @memberof Public.Html
 */
/**
 * @namespace Personalised
 * @memberof Public.Html.Elements
 */

/**
 * Main class
 * @memberof Public 
 */
class Main {
	static start()
	{
		HTMLManager.init();
		ScreenManager.init();
		Loader.start();
	}
};

export default Main;

document.addEventListener("DOMContentLoaded", () => {Main.start()});
