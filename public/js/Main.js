import Loader from './Loader.js';

export default class Main {
	static start()
	{
		Loader.start();
	}	
};

document.on("DOMContentLoaded", Main.start);
