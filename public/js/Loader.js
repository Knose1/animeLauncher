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
	
	static getEpisodeInfo(animeId, episodeId, callback)
	{
		animeId = Number.parseInt(animeId);
		episodeId = Number.parseInt(episodeId);

		FileLoader.getInstance()._reset()
		.readAsJson(`./get/episode/info?animeId=${animeId}&episodeId=${episodeId}`, (data) => {
			console.log(data);
			callback(data);
		})
		.start();
	}
	
	/**
	 * 
	 * @param {number} animeId 
	 * @param {number} episodeId 
	 */
	static loadLocalEpisode(animeId, episodeId)
	{
		animeId = Number.parseInt(animeId);
		episodeId = Number.parseInt(episodeId);

		FileLoader.getInstance()._reset()
		.readAsBlob(`./episode/${animeId}/${episodeId}`, (blob) => {
			console.log(blob);
			DataManager.showVideo(blob, animeId, episodeId);
		})
		.start();
	}

	static downloadYoutubeEpisode(ytInfo)
	{
		encodeURI(JSON.stringify(ytInfo));
	}

	static download()

	static onListLoaded(data)
	{
		DataManager.initAnimes(data);
	}
}