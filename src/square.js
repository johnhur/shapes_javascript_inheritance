var Shape = require("./shape");

function Square(sideLength, color) {
  Shape.call(this, 4, color);
  this.sideLength = sideLength;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

// Square.prototype = {
// 	area: function() {
// 		return (this.sideLength * this.sideLength);
// 	},
// 	perimeter: function() {
// 		return(this.sideLength * 4);
// 	}
// }
Square.prototype.area = function() {
	return (this.sideLength * this.sideLength);
}
Square.prototype.perimeter = function() {
	return(this.sideLength * 4);
}
Square.prototype.draw = function() {
	return ("ㅁ")
}
// TODO: Implement area, perimeter, draw and toString for Square.
// DO NOT reimplement getRGB.  That should only have to be done once.

module.exports = Square;
