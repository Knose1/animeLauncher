const TYPE_TEXT = 0;
const TYPE_BLOB = 1;
const TYPE_JSON = 2;
const TYPE_HTML = 3;

/** 
 * @readonly
 * @enum {number}
 * @memberof Public.Common
 */
let FileType = 
{
	TYPE_TEXT,
	TYPE_BLOB,
	TYPE_JSON,
	TYPE_HTML
}

/**
 * @memberof Public.Common
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