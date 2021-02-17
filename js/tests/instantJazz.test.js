const jazzify = require("../instantJazz");

const data = [
  [
    ["G", "F", "C"],
    ["G7", "F7", "C7"]
  ],
  [
    ["Dm", "G", "E", "A"],
    ["Dm7", "G7", "E7", "A7"]
  ],
  [
    ["F7", "E7", "A7", "Ab7", "Gm7", "C7"],
    ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
  ],
  [
    ["G", "C7"],
    ["G7", "C7"]
  ],
  [[], []]
];

describe("jazzify", () => {
  describe("Return array of chords with 7 at the end of each elements", () => {
    test.each(data)("jazzify(%p) = %p", (arr, result) => {
      let actual = jazzify(arr);

      expect(actual).toEqual(result);
    });
  });
});
