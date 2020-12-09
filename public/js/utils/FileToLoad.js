const TYPE_TEXT = 0;
const TYPE_BLOB = 1;
const TYPE_JSON = 2;
const TYPE_HTML = 3;

/** 
 * @readonly
 * @enum {number}
 * @memberof Public.Common.FileLoader.FileToLoad
 */
let FileType = 
{
	/**
	 * 0
	 */
	TYPE_TEXT,
	/**
	 * 1
	 */
	TYPE_BLOB,
	/**
	 * 2
	 */
	TYPE_JSON,
	/**
	 * 3
	 */
	TYPE_HTML
}

/**
 * @memberof Public.Common.FileLoader
 */
class FileToLoad {
	
	/**
	 * @returns {FileType}
	 */
	static getTYPE_TEXT() {
		return TYPE_TEXT;
	}
	
	/**
	 * @returns {FileType}
	 */
	static getTYPE_BLOB() {
		return TYPE_BLOB;
	}
	
	/**
	 * @returns {FileType}
	 */
	static getTYPE_JSON() {
		return TYPE_JSON;
	}
	
	/**
	 * @returns {FileType}
	 */
	static getTYPE_HTML() {
		return TYPE_HTML;
	}

	/**
	 * 
	 * @param {string} pUrl 
	 * @param {FileType} pType
	 * @param {Function} pCallback 
	 */
	constructor(pUrl, pType, pCallback) {
		this.url 		= pUrl;
		this.type 		= pType;
		this.callback 	= pCallback;
	}
}

export default FileToLoad;