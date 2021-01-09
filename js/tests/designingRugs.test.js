const makeRug = require("../designingRugs");

const data = [
  [3, 5, "#", ["#####", "#####", "#####"]],
  [3, 5, "$", ["$$$$$", "$$$$$", "$$$$$"]],
  [2, 2, "A", ["AA", "AA"]],
  [3, 1, "b", ["b", "b", "b"]],
  [2, 1, "bcb", ["bcb", "bcb"]]
];

describe("makeRug", () => {
  describe("Return array of width n and height m containing string s", () => {
    test.each(data)("makeRug(%i, %i, %p) = %p", (m, n, s, result) => {
      let actual = makeRug(m, n, s);

      expect(actual).toEqual(result);
    });
  });
});
