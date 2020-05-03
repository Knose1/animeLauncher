import FileToLoad from './FileToLoad.js';

const STATUS_OK = 200;

const RESET = -2;
const START = -1;

/**
	FileLoader s'occupe de charger les fichiers et transmettre les données à des callbacks.
	Il peut charger du text ou générer un blob.
	@example
	<code type="javascript">
		function init() {
			FileLoader.getInstance().readAsText('./leveldesign.json', (pD) => {
				LevelManager.init(pD);
			});
			FileLoader.getInstance().oncomplete = () => { FlowManager.showMainMenu() };
	
			FileLoader.getInstance().start();
		}
	</code>
*/

export default class FileLoader {
	//static _instance;
	//_currentLoadingItemIndex;
	//loadList;

	//onerror
	//onparseerror
	//oncomplete
	//onprogress
	
	/**
	 * @returns {FileLoader}
	 */
	static getInstance() {
		return FileLoader._instance || (FileLoader._instance = new FileLoader());
	}

	/*
		Constructor
	*/
	constructor() {
		this._reset();

		/**
		 * True if not started or not ended
		 */
		this.isComplete = true;

		/**
		 * @callback Next
		 * @returns {void}
		 */
		/**
		 * @callback Reset
		 * @returns {void}
		 */

		/** 
		 * @callback onerror
		 * @param {Error} pErr
		 * @param {Next} pNext
		 * @param {Reset} pReset
		 * @param {number} pCurrentLoadingItemIndex
		 * @returns {void}
		*/
		/**
		 * @type {onerror}
		 */
		this.onerror = null;

		/** 
		 * @callback onparseerror
		 * @param {Error} pErr
		 * @param {Next} pNext
		 * @param {Reset} pReset
		 * @param {number} pCurrentLoadingItemIndex
		 * @returns {void}
		*/
		/**
		 * @type {onparseerror}
		 */
		this.onparseerror = null;
		
		/** 
		 * @callback oncomplete
		 * @returns {void}
		*/
		/**
		 * @type {oncomplete}
		 */
		this.oncomplete = null;
		
		/** 
		 * @callback onprogress
		 * @param {number} pProgress
		 * @returns {void}
		*/
		/**
		 * @type {onprogress}
		 */
		this.onprogress = null;

		/**
		 * @type {FileToLoad[]}
		 */
		this.loadList = [];
	}

	/**
	 * @protected
	 */
	_destroy()
	{
		if (FileLoader._instance == this) 
		{
			FileLoader._instance = null;
			_reset();
		}
	}
	
	/**
	 * @namespace FileLoader
	 * @callback TextDataCallback
	 * @param {string} pData
	 * @return {void}
	 */

	/**
	 * Renvoie une chaine de charactère contenant le contenu du fichier
	 * @param {string} pURL
	 * @param {TextDataCallback} pCallback
	 */
	readAsText(pURL, pCallback) {
		this.loadList.push(new FileToLoad(
			pURL,
			FileToLoad.getTYPE_TEXT(),
			pCallback
		));
		return this;
	}



	/**
	 * @namespace FileLoader
	 * @callback JsonDataCallback
	 * @param {*} pData
	 * @return {void}
	 */

	/**
	 * Renvoie l'object json contenu dans le fichier
	 * @param {string} pURL
	 * @param {JsonDataCallback} pCallback
	 */
	readAsJson(pURL, pCallback) {
		this.loadList.push(new FileToLoad(
			pURL,
			FileToLoad.getTYPE_JSON(),
			pCallback
		));
		return this;
	}



	/**
	 * @namespace FileLoader
	 * @callback HTMLDataCallback
	 * @param {Document} pData
	 * @return {void}
	 */

	/**
	 * Renvoie le document html contenu dans le fichier
	 * @param {string} pURL
	 * @param {HTMLDataCallback} pCallback
	 */
	readAsHTML(pURL, pCallback) {
		this.loadList.push(new FileToLoad(
			pURL,
			FileToLoad.getTYPE_HTML(),
			pCallback
		));
		return this;
	}

	/**
	 * @namespace FileLoader
	 * @callback BlobDataCallback
	 * @param {string} pData
	 * @return {void}
	 */

	/**
	 * Renvoie un url blob pointant vers le fichier stocké en cache
	 * @param {string} pURL
	 * @param {BlobDataCallback} pCallback
	 */
	readAsBlob(pURL, pCallback) {
		this.loadList.push(new FileToLoad(
			pURL,
			FileToLoad.getTYPE_BLOB(),
			pCallback
		));
		return this;
	}

	start() {
		this.isComplete = false;
		this._currentLoadingItemIndex = START;
		this._callNext();
	}

	_reset() {
		this._currentLoadingItemIndex = RESET;
		this.loadList = [];
		return this;
	}
	

	_callNext() {
		if (this._currentLoadingItemIndex < START) return;



		this._currentLoadingItemIndex++;

		//Si on est arrivé à la fin de la loadlist, on execute oncomplete
		if (this._currentLoadingItemIndex >= this.loadList.length) {
			if (this.oncomplete instanceof Function) this.oncomplete();
			this.isComplete = true;
			//this._destroy();
			return;
		}
		


		//On execute onprogress lorsque l'on charge un nouveau fichier
		let lProgress = this._currentLoadingItemIndex / this.loadList.length;
		if (this.onprogress instanceof Function) this.onprogress(lProgress);


		let currentLoadingItem = this.loadList[this._currentLoadingItemIndex];
		
		/**
		 * 
		 * @param {Error} pErr 
		 */
		let lCatchFunction = (pCalback, pErr) => {
			console.error(pErr, currentLoadingItem);

			if (pCalback instanceof Function) pCalback(pErr, this._callNext.bind(this), this._reset.bind(this), this._currentLoadingItemIndex);
		}

		//On récupère le contenu du fichier
		fetch(currentLoadingItem.url)
		.then((pResult) => {
			if (pResult.status !== STATUS_OK) {
				lCatchFunction(this.onerror, new Error(pResult.status+" "+pResult.statusText+" : " + pResult.url));
				return;
			}

			/*
				On parse le résultat en text ou en blob en fonction de la réponse
			*/
			
			let lFunction = null;

			switch (currentLoadingItem.type) {
				case FileToLoad.getTYPE_HTML():
				case FileToLoad.getTYPE_TEXT():
					lFunction = pResult.text();
					break;

				case FileToLoad.getTYPE_BLOB():
					lFunction = pResult.blob();
					break;

				case FileToLoad.getTYPE_JSON():
					lFunction = pResult.json();
					break;
			}

			lFunction.then(
				(pData) => {

					switch (currentLoadingItem.type) {
						case FileToLoad.getTYPE_BLOB():
							this._createUrlAndSendResult(pData, currentLoadingItem)
							break;
						
						case FileToLoad.getTYPE_HTML():
							this._parseAsHtmlAndSendResult(pData, currentLoadingItem);
							break;

						default:
							this._directSendResult(pData, currentLoadingItem)
							break;
					}

					this._callNext();
				}
				
			)
			.catch( lCatchFunction.bind(this, this.onparseerror) );
		})
		.catch( lCatchFunction.bind(this, this.onerror) );
		
	}

	_directSendResult(pData, pCurrentLoadingItem) {
		pCurrentLoadingItem.callback(pData);
	}

	_createUrlAndSendResult(pData, pCurrentLoadingItem) {
		pCurrentLoadingItem.callback(URL.createObjectURL(pData));
	}

	_parseAsHtmlAndSendResult(pData, pCurrentLoadingItem)
	{
		// Convert the HTML string into a document object
		var parser = new DOMParser();
		var doc = parser.parseFromString(pData, 'text/html');

		pCurrentLoadingItem(doc);
	}
}