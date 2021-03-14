const largestEven = require("../largestEvenNumber");

const data = [
  [[3, 7, 2, 1, 7, 9, 10, 13], 10],
  [[1], -1],
  [[22], 22],
  [[13, 5, 7, 9], -1],
  [[3, 19, 18973623, 2], 2]
];

describe("largestEven", () => {
  describe("Return largest even number", () => {
    test.each(data)("largestEven(%p) = %i", (nums, result) => {
      let actual = largestEven(nums);

      expect(actual).toEqual(result);
    });
  });
});
