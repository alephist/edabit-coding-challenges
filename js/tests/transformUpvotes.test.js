const transformUpvotes = require("../transformUpvotes");

const data = [
  ["20.3k 3.8k 7.7k 992", [20300, 3800, 7700, 992]],
  ["5.5k 8.9k 32", [5500, 8900, 32]],
  ["6.8k 13.5k", [6800, 13500]]
];

describe("transformUpvotes", () => {
  describe("Return upvote counts into array of numbers", () => {
    test.each(data)("transformUpvotes(%p) = %p", (str, result) => {
      let actual = transformUpvotes(str);

      expect(actual).toEqual(result);
    });
  });
});
