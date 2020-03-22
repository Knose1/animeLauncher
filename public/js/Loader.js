import FileLoader from './utils/FileLoader.js';
import DataManager from './data/DataManager.js';


export default class Loader 
{
	static start()
	{
		Loader.reloadAnime();
	}

	static reloadAnime()
	{
		FileLoader.getInstance()
		.readAsJson("./get/list", this.onListLoaded)
		.start();
	}

	static onListLoaded(data)
	{
		DataManager.initAnimes(data);
	}
}