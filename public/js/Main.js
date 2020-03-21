import Loader from './Loader';

export default class Main {
	static start()
	{
		Loader.start();
	}	
};

document.on("DOMContentLoaded", Main.start);
