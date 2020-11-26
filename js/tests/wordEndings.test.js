const addEnding = require("../wordEndings");

const data = [
  [
    ["clever", "meek", "hurried", "nice"],
    "ly",
    ["cleverly", "meekly", "hurriedly", "nicely"]
  ],
  [["new", "pander", "scoop"], "er", ["newer", "panderer", "scooper"]],
  [["bend", "sharpen", "mean"], "ing", ["bending", "sharpening", "meaning"]],
  [["bend", "tooth", "mint"], "y", ["bendy", "toothy", "minty"]],
  [["bend", "tooth", "mint"], "ier", ["bendier", "toothier", "mintier"]]
];

describe("addEnding", () => {
  describe("Add string ending to each member of an array", () => {
    test.each(data)("addEnding(%p, %p) = %p", (arr, ending, expected) => {
      var actual = addEnding(arr, ending);

      expect(actual).toEqual(expected);
    });
  });
});
