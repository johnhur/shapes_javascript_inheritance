function Shape(sides, color) {
  this.sides = sides;
  this.color = color;
}

Shape.prototype.area = function() {
  return 0;
};

Shape.prototype.perimeter = function() {
  return 0;
};

// Should return an assci version of the shape.  Since the shape
// doesn't make sense here, we return a string.
Shape.prototype.draw = function() {
   return "A shape with " + this.sides + " sides";
};

Shape.prototype.toString = function() {
  return "[Shape sides:" + this.sides + ", color:" + this.color +" ]"
};

Shape.prototype.getRGB = function() {
  // Return the rgb value (as a string) for the color you've selected.
  // You can have a preset list of colors that you switch on.
  var colors = {
  	blue: "rgb(0,0,255)",
  	red: "rgb(255,0,0)",
  	black: "rgb(0,0,0)",
  	yellow: "rgb(255,255,0)",
  	green: "rgb(0,128,0)"
  };
  return colors[this.color]
};

module.exports = Shape;
