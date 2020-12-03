const countWords = require("../wordCount");

const data = [
  ["It's high noon", 3],
  ["Is this easy mode", 4],
  ["What an easy task, right", 5],
  ["This is a test", 4],
  ["Just an example here move along", 6],
  ["How are you today?", 4]
];

describe("countWords", () => {
  describe("Takes input string and return word count", () => {
    test.each(data)("countWords(%p) = %i", (str, expected) => {
      var actual = countWords(str);

      expect(actual).toEqual(expected);
    });
  });
});
