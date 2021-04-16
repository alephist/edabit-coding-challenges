const indexFilter = require("../indexFiltering");

const data = [
  [[7, -1, 5, 1], "She is the love of my love", "tesh"],
  [[4, -7, -13, -11, -2, 0], "Relax and stay calm to avoid failures", "xavier"],
  [[2, 3, 8, 11], "Autumn in New York", "tune"],
  [[0, 1, 5, 7, 4, 2], "Cry me a river", "creamy"],
  [
    [9, -9, 2, 27, 36, 6, 5, 13, -1, 2, 0, 30, 2],
    "That's life, I've got you under my skin",
    "frank sinatra"
  ],
  [[-1, 8, 8, 3], "Dream a Little Dream of Me", "ella"]
];

describe("indexFilter", () => {
  describe("Return new string with the letters of str at each index idx in order", () => {
    test.each(data)("indexFilter(%p, %p) = %p", (idx, str, result) => {
      let actual = indexFilter(idx, str);

      expect(actual).toEqual(result);
    });
  });
});
