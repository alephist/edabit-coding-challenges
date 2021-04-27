const histogram = require("../histogramFunction");

const data = [
  [[2, 4, 5, 6], "o", "oo\noooo\nooooo\noooooo"],
  [[4, 2], "*", "****\n**"],
  [[20, 1, 12], "H", "HHHHHHHHHHHHHHHHHHHH\nH\nHHHHHHHHHHHH"],
  [[2, 1, 2, 4, 5, 2, 3], "#", "##\n#\n##\n####\n#####\n##\n###"]
];

describe("histogram", () => {
  describe("Return a histogram from input array and character", () => {
    test.each(data)("histogram(%p, %p) = %p", (arr, char, result) => {
      let actual = histogram(arr, char);

      expect(actual).toEqual(result);
    });
  });
});
