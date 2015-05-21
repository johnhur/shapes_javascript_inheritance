var Square = require("../src/square");

var square;

describe("Square", function() {
  beforeEach(function() {
    square = new Square(2, "red");
  });

  describe("Area", function() {
    it("should be 4 for a square", function() {
      expect(square.area()).toEqual(4);
    });
  });

  describe("Perimeter", function() {
    it("should be 8 for a square with side length 2", function() {
      expect(square.perimeter()).toEqual(8);
    });
  });

   describe("getRGB", function() {
    it("should return color RGB value for blue", function() {
      expect(square.getRGB()).toEqual("rgb(255,0,0)")
    });
  });

   describe("draw", function() {
    it("should return a square ascii drawing", function() {
      expect(square.draw()).toEqual("ㅁ")
    });
  });
  // Write more specs!!
});
