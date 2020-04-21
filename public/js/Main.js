import Loader from './Loader.js';
import HTMLManager from './data/HTMLManager.js';

export default class Main {
	static start()
	{
		Loader.start();
		HTMLManager.init();
	}
};

document.addEventListener("DOMContentLoaded", () => {Main.start()});
