const findPerimeter = require("../rectanglePerimeter");

const data = [
  [6, 7, 26],
  [20, 10, 60],
  [2, 9, 22]
];

describe("findPerimeter", () => {
  describe("Return rectangle perimeter from given length and width", () => {
    test.each(data)("2(%i) + 2(%i) = %i", (length, width, perimeter) => {
      var actual = findPerimeter(length, width);

      expect(actual).toEqual(perimeter);
    });
  });
});
