import Loader from './Loader.js';
import HTMLManager from './data/HTMLManager.js';
import ScreenManager from './data/ScreenManager.js';

export default class Main {
	static start()
	{
		HTMLManager.init();
		ScreenManager.init();
		Loader.start();
	}
};

document.addEventListener("DOMContentLoaded", () => {Main.start()});
