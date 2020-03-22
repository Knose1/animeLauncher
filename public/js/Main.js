import Loader from './Loader.js';

export default class Main {
	static start()
	{
		Loader.start();
	}	
};

document.addEventListener("DOMContentLoaded", () => {Main.start()});
