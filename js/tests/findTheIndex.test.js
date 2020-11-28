const search = require("../findTheIndex");

const data = [
  [[1, 5, 3], 5, 1],
  [[9, 8, 3], 3, 2],
  [[1, 2, 3], 4, -1],
  [[1, 5, 3, 10, 17, 20, -6], 20, 5]
];

describe("search", () => {
  describe("Return index of a given item", () => {
    test.each(data)("search(%p, %i) = %i", (arr, item, index) => {
      var actual = search(arr, item);

      expect(actual).toEqual(index);
    });
  });
});
