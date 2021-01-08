const cubeSquareRoot = require("../cubeTheSquareRoot");

const data = [
  [81, 729],
  [1646089, 2111932187],
  [695556, 580093704]
];

describe("cubeSquareRoot", () => {
  describe("Return the cube of square root of input number", () => {
    test.each(data)("cubeSquareRoot(%i) = %i", (num, result) => {
      let actual = cubeSquareRoot(num);

      expect(actual).toEqual(result);
    });
  });
});
