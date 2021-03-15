const canFind = require("../doAllBigramsExist");

const data = [
  [["at", "be", "th", "au"], ["beautiful", "the", "hat"], true],
  [["bo", "ta", "el", "st", "ca"], ["books", "table", "cap", "hostel"], true],
  [["la", "te"], ["latte"], true],
  [["th", "fo", "ma", "or"], ["the", "many", "for", "forest"], true],
  [["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"], false],
  [["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"], false],
  [["la"], [], false],
  [["la", "at", "te", "ea"], ["latte"], false]
];

describe("canFind", () => {
  describe("Return true if every bigram is present at least once in an array of words", () => {
    test.each(data)("canFind(%p, %p) = %s", (bigrams, words, result) => {
      let actual = canFind(bigrams, words);

      expect(actual).toEqual(result);
    });
  });
});
