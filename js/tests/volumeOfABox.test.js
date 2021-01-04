const volumeOfBox = require("../volumeOfABox");

const data = [
  [{ width: 11, length: 1, height: 2 }, 22],
  [{ width: 1, length: 5, height: 3 }, 15],
  [{ width: 2, length: 1, height: 1 }, 2],
  [{ width: 2, length: 6, height: 5 }, 60],
  [{ width: 2, length: 5, height: 3 }, 30],
  [{ width: 2, length: 5, height: 1 }, 10]
];

describe("volumeOfBox", () => {
  describe("Return the volume of the box", () => {
    test.each(data)("volumeOfBox(%p) = %i", (sizes, result) => {
      let actual = volumeOfBox(sizes);

      expect(actual).toEqual(result);
    });
  });
});
