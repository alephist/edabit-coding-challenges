const sharedLetters = require("../lettersSharedBetweenTwoWords");

const data = [
  ["apple", "meaty", 2],
  ["fan", "forsook", 1],
  ["spout", "shout", 4],
  ["took", "taken", 2],
  ["mentor", "terminal", 5],
  ["class", "last", 3]
];

describe("sharedLetters", () => {
  describe("Return number of letters shared between two words", () => {
    test.each(data)("sharedLetters(%p, %p) = %i", (str1, str2, result) => {
      let actual = sharedLetters(str1, str2);

      expect(actual).toEqual(result);
    });
  });
});
