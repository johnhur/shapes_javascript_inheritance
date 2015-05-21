var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.

function Rectangle(width, length, color) { 
	Shape.call(this, 4, color);
	this.length = length;
	this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype); 
Rectangle.prototype.constructor = Rectangle; 

// Rectangle.prototype = {
// 	area: function() {
// 		return (this.length * this.width);
// 	},
// 	perimeter: function() {
// 		return (2*this.length + 2*this.width);
// 	},
// 	toString: function() {
// 		return ("[Rectangle width: " + this.width + ", Rectangle length: " + this.length + ", color: " + this.color +"]");
// 	}
// }

Rectangle.prototype.area = function() {
	return (this.length * this.width);
}
Rectangle.prototype.perimeter = function() {
	return (2*this.length + 2*this.width); 
}
Rectangle.prototype.toString = function() {
	return ("[Rectangle width: " + this.width + ", Rectangle length: " + this.length + ", color: " + this.color +"]");
}
Rectangle.prototype.draw = function() {
	return ("ㅁ")
}

module.exports = Rectangle;

