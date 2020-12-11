const Circle = require("../circle");

const round = (number) => {
  let factor = Math.pow(10, 5);

  return Math.round(number * factor) / factor;
};

describe("Circle", () => {
  describe("getArea", () => {
    describe("Returns area of circle from radius input", () => {
      const data = [
        [20, 1256.63706],
        [2, 12.56637],
        [4.4, 60.82123]
      ];

      test.each(data)("new Circle(%p).getArea() = %p", (radius, result) => {
        let circle = new Circle(radius);

        let actual = round(circle.getArea());

        expect(actual).toEqual(result);
      });
    });
  });

  describe("getPerimeter", () => {
    describe("Return circumference of circle from radius input", () => {
      const data = [
        [20, 125.66371],
        [2, 12.56637],
        [4.4, 27.64602]
      ];

      test.each(data)(
        "new Circle(%p).getPerimeter() = %p",
        (radius, result) => {
          let circle = new Circle(radius);

          let actual = round(circle.getPerimeter());

          expect(actual).toEqual(result);
        }
      );
    });
  });
});
