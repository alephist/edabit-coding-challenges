const isFourLetters = require("../fourLetterStrings");

const data = [
  [
    ["Ryan", "Kieran", "Jason", "Matt"],
    ["Ryan", "Matt"]
  ],
  [["Tomato", "Potato", "Pair"], ["Pair"]],
  [["Kangaroo", "Bear", "Fox"], ["Bear"]],
  [
    ["Red", "Blue", "Green", "Pink"],
    ["Blue", "Pink"]
  ],
  [["is", "up", "two", "elephant"], []],
  [[], []],
  [
    ["jazz", "quiz", "jump"],
    ["jazz", "quiz", "jump"]
  ],
  [[""], []],
  [["Broccoli", "Carrot", "Spinach"], []]
];

describe("isFourLetters", () => {
  describe("Return array with words having 4 letters", () => {
    test.each(data)("isFourLetters(%p) = %p", (arr, result) => {
      let actual = isFourLetters(arr);

      expect(actual).toEqual(result);
    });
  });
});
