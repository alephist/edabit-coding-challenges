const dictionary = require("../littleDictionary");

const data = [
  ["bu", ["button", "breakfast", "border"], ["button"]],
  ["beau", ["pastry", "delicious", "name", "boring"], []],
  ["there", ["there", "here", "everywhere"], ["there"]],
  ["sno", ["snow", "paper", "ghost"], ["snow"]],
  [
    "ma",
    ["marriage", "married", "many", "delight"],
    ["marriage", "married", "many"]
  ],
  [
    "no",
    ["inferno", "notion", "nominate", "note", "fairy"],
    ["notion", "nominate", "note"]
  ],
  [
    "cre",
    ["creating", "creature", "creed", "increasing"],
    ["creating", "creature", "creed"]
  ]
];

describe("dictionary", () => {
  describe("Return words that start with initial word", () => {
    test.each(data)("dictionary(%p, %p) = %p", (initial, words, result) => {
      let actual = dictionary(initial, words);

      expect(actual).toEqual(result);
    });
  });
});
