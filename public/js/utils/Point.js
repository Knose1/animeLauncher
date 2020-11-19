/**
 * @namespace Public
 */
/**
 * @namespace Common
 * @memberof Public
 */

/**
 * Classe qui permet de stocker les x / y et de comparer les valeurs avec d'autres points
 * @memberof Public.Common
*/
class Point {

	constructor(pX = 0, pY = 0) {

		this.x = pX;
		this.y = pY

		Point.checkIsPointConvertible(this);
	}

	getSqrtLength() {
		return x * x + y * y;
	}
	
	getLength() {
		return Math.sqrt(getSqrtLength());
	}

	equal(pPoint) {
		Point.checkIsPointConvertible(pPoint);

		return this.x === pPoint.x && this.y === pPoint.y;
	}

	add(pPoint) {
		Point.checkIsPointConvertible(pPoint);

		return new Point(this.x + pPoint.x, this.y + pPoint.y);
	}

	remove(pPoint) {
		Point.checkIsPointConvertible(pPoint);

		return new Point(this.x - pPoint.x, this.y - pPoint.y);
	}

	opposite() {
		return new Point(-this.x, -this.y);
	}

	clone() {
		return new Point(this.x, this.y);
	}

	static from(pObject, pPropNameForX = "x", pPropNameForY = "y") {

		return new Point(pObject[pPropNameForX], pObject[pPropNameForY]);
	}

	static checkIsPointConvertible(pPoint) {
		if ( !(typeof pPoint.x === "number") || !(typeof pPoint.y === "number")) throw new TypeError(`la propriété x ou y n'as pas été trouvé sur pPoint`);
	}
}

export default Point;