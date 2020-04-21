const path = require("path");

//*//////////////////////////////*//
//*       Global variables       *//
//*//////////////////////////////*//

/**
 * @example nameof({myVar}); //return "myVar"
 * @param {Object} varObject 
 */
function nameof(varObject) {
    return Object.keys(varObject)[0];
}
global.nameof = nameof;

/**
 * The folder of the node.js projet
 * @type {string}
 */
var __root = path.resolve(__dirname, "../");//we are in /src so we must go up to real root
global.__root = __root;

console.newLine = function() {console.log("\n\r")};
//*//////////////////////////////*//