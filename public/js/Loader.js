import FileLoader from './utils/FileLoader.js';
import ScreenManager from './data/ScreenManager.js';


export default class Loader 
{
	/**
	 * List of blob url for thumbnail
	 * @type {string[]}
	 */
	static get defaultThumbnailList() {return Loader._defaultThumbnailList || (Loader._defaultThumbnailList = [])}

	/**
	 * 
	 * @param {number[]} numbers 
	 * @param {Function} onComplete 
	 */
	static preloadDefaultThumbnail(numbers, onComplete)
	{
		console.group("Thumbnail");
		console.log(numbers);
		console.groupEnd();

		FileLoader.getInstance()._reset();
		for (let i = numbers.length - 1; i >= 0; i--) {
			let num = numbers[i];
			FileLoader.getInstance().readAsBlob(`/asset/thumbnail/${num}.png?width=640&height=358&textSize=300`, (url) => {
				this.defaultThumbnailList[num] = url;
			});
		}

		FileLoader.getInstance().oncomplete = () => {
			FileLoader.getInstance().oncomplete = null;

			console.group("Blob Thumbnail");
			console.log(this.defaultThumbnailList);
			console.groupEnd();
	
			onComplete();
		};

		FileLoader.getInstance().start();
	}

	static start()
	{
		Loader.loadAnimeList();
	}

	static loadAnimeList()
	{
		let list;
		FileLoader.getInstance()._reset()
		FileLoader.getInstance().readAsJson("./get/list", (d) => {
			list = d;
		})

		FileLoader.getInstance().oncomplete = () => {
			console.log("[FileLoader] Finished loading list");
			

			FileLoader.getInstance().oncomplete = null;
			FileLoader.getInstance().onerror = (e) => {
				alert(e);
				ScreenManager.generateAnimeListHTML();
			};
			
			this.onListLoaded(list);
		};

		FileLoader.getInstance().start();
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

		ScreenManager.showVideo(`./episode/${animeId}/${episodeId}`, animeId, episodeId);
		
	}

	static download(animeId, episodeId, videoPlayerId, url, format = null)
	{
		return new Promise((resolve, reject) => {
			//location.host = hostname:port;
			let reqUrl = new URL(`${window.location.protocol}//${window.location.host}/get/episode/download`);
		
			if (format != null) reqUrl.searchParams.set("format", JSON.stringify(format));
			
			reqUrl.searchParams.set("animeId", animeId);
			reqUrl.searchParams.set("episodeId", episodeId);
			reqUrl.searchParams.set("videoPlayerId", videoPlayerId);
			reqUrl.searchParams.set("url", url);

			let loader = new FileLoader().readAsJson(reqUrl.toString(), (json) => {
				//json but no need bro
				loader._destroy();
				resolve();
			});
			loader.onparseerror = loader.onerror = (e) => 
			{
				reject(e);
			}
			loader.start();
		});
	}

	static listDownload()
	{
		
	}

	static onListLoaded(data)
	{
		ScreenManager.initAnimes(data);
	}
}