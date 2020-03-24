import FileLoader from './utils/FileLoader.js';
import DataManager from './data/DataManager.js';


export default class Loader 
{
	static start()
	{
		Loader.loadAnimeList();
	}

	static loadAnimeList()
	{
		FileLoader.getInstance()._reset();
		FileLoader.getInstance()
		.readAsJson("./get/list", this.onListLoaded)
		.start();
	}
	
	static getEpisodeInfo(animeId, episodeId)
	{
		animeId = Number.parseInt(animeId);
		episodeId = Number.parseInt(episodeId);

		FileLoader.getInstance()
		.readAsJson(`./get/episode/info?animeId=${animeId}&episodeId=${episodeId}`, (data) => {
			console.dir(data);
		})
		.start();
	}

	static onListLoaded(data)
	{
		DataManager.initAnimes(data);
		Loader.getEpisodeInfo(0,2);
	}
}