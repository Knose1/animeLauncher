import FileLoader from './utils/FileLoader.js';
import ScreenManager from './data/ScreenManager.js';

/**
 * @namespace Public
 */

/**
 * @memberof Public 
 */
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
	 * @param {Function} onprogress 
	 */
	static preloadDefaultThumbnail(numbers, onComplete, onprogress)
	{
		console.group("Thumbnail");
		console.log(numbers);
		console.groupEnd();

		let fl = new FileLoader();
		for (let i = numbers.length - 1; i >= 0; i--) {
			let num = numbers[i];
			
			if (this.defaultThumbnailList[num]) continue;

			fl.readAsBlob(`/asset/thumbnail/${num}.png?width=640&height=358&textSize=300`, (url) => {
				this.defaultThumbnailList[num] = url;
			});
		}

		fl.oncomplete = () => {
			fl.oncomplete = null;
			fl.onprogress = null;

			console.group("Blob Thumbnail");
			console.log(this.defaultThumbnailList);
			console.groupEnd();
	
			onComplete();
		};

		if (onprogress) {
			fl.onprogress = (p) => {
				onprogress(p);
			};
		}

		fl.start();
	}

	static start()
	{
		Loader.loadAnimeList();
		Loader.getListDownload();
	}

	static loadAnimeList()
	{
		ScreenManager.showLoadingAnime();

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
	
	static getEpisodeInfo(animeId, episodeId, callback, loadYtInfo = true)
	{
		animeId = Number.parseInt(animeId);
		episodeId = Number.parseInt(episodeId);

		FileLoader.getInstance()._reset()
		.readAsJson(`./get/episode/info?animeId=${animeId}&episodeId=${episodeId}&loadYtInfo=${loadYtInfo}`, (data) => {
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
	static loadLocalEpisode(animeId, episodeId, listIsEpisodeLocal)
	{
		animeId = Number.parseInt(animeId);
		episodeId = Number.parseInt(episodeId);

		ScreenManager.showVideo(`./episode/${animeId}/${episodeId}`, animeId, episodeId, listIsEpisodeLocal);
		
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
				loader._destroy();
				resolve(json);
			});
			loader.onparseerror = loader.onerror = (e) => 
			{
				reject(e);
			}
			loader.start();
		});
	}

	static getListDownload()
	{
		let loader = new FileLoader().readAsJson("./get/list/download", (json) => {
			ScreenManager.downloadList(json);
		});
		loader.oncomplete = () => {
			setTimeout(
				() => 
				{ 
					Loader.getListDownload();
					loader._destroy();
				},
				2000
			);
		};
		loader.onparseerror = loader.onerror = (e) => 
		{
			console.log(e);
			setTimeout(
				() => {
					Loader.getListDownload();
					loader._destroy(); 
				},
				2000
			);
		};
		loader.start();
	}

	static onListLoaded(data)
	{
		ScreenManager.initAnimes(data);
	}
}