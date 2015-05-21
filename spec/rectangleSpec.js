var Rectangle = require("../src/rectangle");

var rectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    rectangle = new Rectangle(4,6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(rectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a square with side lengths 4,6", function() {
      expect(rectangle.perimeter()).toEqual(20);
    });
  });

  describe("toString", function() {
    it("should return rectangle width, length, and color in a string.", function() {
      expect(rectangle.toString()).toEqual("[Rectangle width: 4, Rectangle length: 6, color: blue]")
    });
  });

  describe("getRGB", function() {
    it("should return color RGB value for blue", function() {
      expect(rectangle.getRGB()).toEqual("rgb(0,0,255)")
    });
  });
  
  describe("draw", function() {
    it("should return a square ascii drawing", function() {
      expect(rectangle.draw()).toEqual("ㅁ")
    });
  });
  // Write more specs!!
});
