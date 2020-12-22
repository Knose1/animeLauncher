import FileLoader from './utils/FileLoader.js';
import ScreenManager from './data/ScreenManager.js';
import { VideoTime } from './data/ScreenElement.js';

/**
 * @memberof Public 
 */
class Loader 
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
		Loader.updateActivity();
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
			console.log("[FileLoader] Finished loading anime list");
			

			FileLoader.getInstance().oncomplete = null;
			FileLoader.getInstance().onerror = (e) => {
				alert(e);
				ScreenManager.generateAnimeListHTML();
			};
			
			this.onListLoaded(list);
		};

		FileLoader.getInstance().start();
	}

	/**
	 * 
	 * @param {function} then 
	 */
	static loadAccounts(then) 
	{
		//ScreenManager.showLoadingAnime();
		
		let list;
		FileLoader.getInstance()._reset()
		FileLoader.getInstance().readAsJson("./get/accounts", (d) => {
			list = d;
		});

		FileLoader.getInstance().oncomplete = () => {
			console.log("[FileLoader] Finished loading account list");
			

			FileLoader.getInstance().oncomplete = null;
			
			
			then(list);
			//this.onListLoaded(list);
		};
		FileLoader.getInstance().onerror = (e) => {
			alert(e);
		};

		FileLoader.getInstance().start();
	}

	/**
	 * 
	 * @param {string} name 
	 * @param {Function} then 
	 */
	static removeAccount(name, then) 
	{
		let url = "./remove/account?name="+encodeURIComponent(name);

		FileLoader.getInstance()._reset()
		FileLoader.getInstance().readAsText(url, () => {});

		FileLoader.getInstance().oncomplete = () => {
			console.log("[FileLoader] Account "+name+" removed");
			
			then();
		};
		FileLoader.getInstance().onerror = (e) => {
			alert(e);
		};

		FileLoader.getInstance().start();
	}
	
	/**
	 * 
	 * @param {string} name 
	 * @param {Function} then 
	 */
	static createAccount(name, then) 
	{
		let url = "./new/account?name="+encodeURIComponent(name);

		FileLoader.getInstance()._reset()
		FileLoader.getInstance().readAsText(url, () => {});

		FileLoader.getInstance().oncomplete = () => {
			console.log("[FileLoader] Account "+name+" created");
			
			then();
		};
		FileLoader.getInstance().onerror = (e) => {
			alert(e);
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

	static getIsSeen(name, animeId, episodeId, callback)
	{
		if (!name) {
			callback(false);
			return;
		}
		animeId = Number.parseInt(animeId);
		episodeId = Number.parseInt(episodeId);

		let reqUrl = new URL(`${window.location.protocol}//${window.location.host}/get/account/seen`);
		
		reqUrl.searchParams.set("name", name);
		reqUrl.searchParams.set("animeId", animeId);
		reqUrl.searchParams.set("episodeId", episodeId);

		let lLoader = new FileLoader()
		.readAsJson(reqUrl.toString(), (json) => {
			lLoader._destroy();
			callback(json);
		});
		lLoader.onparseerror = lLoader.onerror = e => {
			callback(false);
			//alert("Error when checking if a is seen : "+e);
		};
		lLoader.start();
	}
	
	/**
	 * 
	 * @param {number} animeId 
	 * @param {number} episodeId 
	 * @param {Array<boolean>} listIsEpisodeLocal 
	 * @param {Array<boolean>} listIsEpisode404 
	 * @param {Array<boolean>} listIsSeen 
	 */
	static loadLocalEpisode(animeId, episodeId, listIsEpisodeLocal, listIsEpisode404, listIsSeen)
	{
		animeId = Number.parseInt(animeId);
		episodeId = Number.parseInt(episodeId);

		ScreenManager.showVideo(this.getVideoPath(animeId, episodeId), animeId, episodeId, listIsEpisodeLocal, listIsEpisode404, listIsSeen);
	}

	static getVideoPath(animeId, episodeId) {return `./episode/${animeId}/${episodeId}`}

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
				loader._destroy();
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
				10000
			);
		};
		loader.start();
	}

	static updateActivity() {
		let loader = new FileLoader()
		
		.readAsJson("./get/account/activity", (json) => {
			let inst = VideoTime.instance;
			if (inst)
				inst.update(json);
		});

		if (ScreenManager.currentAccount) 
		{
			let lVid = ScreenManager.currentVideo;
			let lActivity = {
				/**
				 * @ignore
				 * @type {number}
				 */
				animeId: -1, 
				
				/**
				 * @ignore
				 * @type {number}
				 */
				episodeId: -1, 
				
				/**
				 * @ignore
				 * @type {number}
				 */
				videoTime: -1, 
				
				/**
				 * @ignore
				 * @type {number}
				 */
				date: Date.now()
			};
			if (lVid) {

				let lEp = lVid._episode;
				let lAnim = lVid._episode.anime;
	
				lActivity.animeId = lAnim.id;
				lActivity.episodeId = lEp.episodeId;
				lActivity.videoTime = lVid.time;
			}


			let reqUrl = new URL(`${window.location.protocol}//${window.location.host}/set/account/activity`);
		
			reqUrl.searchParams.set("name", ScreenManager.currentAccount);
			reqUrl.searchParams.set("animeId", lActivity.animeId);
			reqUrl.searchParams.set("episodeId", lActivity.episodeId);
			reqUrl.searchParams.set("videoTime", lActivity.videoTime);
			reqUrl.searchParams.set("date", lActivity.date);

			loader.readAsText(reqUrl.toString(), () => {});
		}
		
		loader.oncomplete = () => {
			setTimeout(
				() => 
				{
					Loader.updateActivity();
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
					Loader.updateActivity();
					loader._destroy(); 
				},
				10000
			);
		};
		loader.start();
	}

	static onListLoaded(data)
	{
		ScreenManager.initAnimes(data);
	}

	/**
	 * 
	 * @param {number} animeId 
	 * @param {number} episodeId 
	 * @param {boolean} value 
	 * @param {function} then
	 */
	static setSeen(name, animeId, episodeId, value, then) 
	{
		if (!name) then();

		let reqUrl = new URL(`${window.location.protocol}//${window.location.host}/edit/account/seen`);
		
		reqUrl.searchParams.set("name", name);
		reqUrl.searchParams.set("animeId", animeId);
		reqUrl.searchParams.set("episodeId", episodeId);
		reqUrl.searchParams.set("value", value);

		let loader = new FileLoader().readAsText(reqUrl.toString(), (t) => {
			loader._destroy();
			then();
		});
		loader.onparseerror = loader.onerror = (e) => 
		{
			loader._destroy();
			alert(e);
		}
		loader.start();
	}
}

export default Loader;