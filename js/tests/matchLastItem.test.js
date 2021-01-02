const matchLastItem = require("../matchTheLastItem");

const data = [
  [["rsq", "6hi", "g", "rsq6hig"], true],
  [[0, 1, 2, 3, 4, 5, "12345"], false],
  [["for", "mi", "da", "bel", "formidable"], false],
  [[8, "thunder", true, "8thundertrue"], true],
  [[1, 1, 1, "11"], false],
  [
    [
      "tocto",
      "G8G",
      "xtohkgc",
      "3V8",
      "ctyghrs",
      100.88,
      "fyuo",
      "Q",
      "toctoG8Gxtohkgc3V8ctyghrs100.88fyuoQ"
    ],
    true
  ]
];

describe("matchLastItem", () => {
  describe("Return boolean if last item matches the rest of elements concatenated together", () => {
    test.each(data)("matchLastItem(%p) = %s", (arr, result) => {
      let actual = matchLastItem(arr);

      expect(actual).toEqual(result);
    });
  });
});
