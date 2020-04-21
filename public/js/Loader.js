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
		FileLoader.getInstance()._reset()
		FileLoader.getInstance().readAsJson("./get/list", this.onListLoaded)
		.start();
	}
	
	static getEpisodeInfo(animeId, episodeId)
	{
		animeId = Number.parseInt(animeId);
		episodeId = Number.parseInt(episodeId);

		FileLoader.getInstance()
		.readAsJson(`./get/episode/info?animeId=${animeId}&episodeId=${episodeId}`, (data) => {
			console.log(data);
			DataManager.generateEpisodeInfo(data);
		})
		.start();
	}

	static downloadYoutubeEpisode(ytInfo)
	{
		encodeURI(JSON.stringify(ytInfo));
	}

	static onListLoaded(data)
	{
		DataManager.initAnimes(data);
	}
}