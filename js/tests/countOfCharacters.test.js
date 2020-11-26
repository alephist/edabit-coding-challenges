const compare = require("../countOfCharacters");

describe("compare", () => {
  describe("Return true if two string have the same length", () => {
    const data = [
      ["AB", "CD"],
      ["meow", "woof"],
      ["Facebook", "Snapchat"]
    ];

    test.each(data)("compare(%s, %s) = true", (str1, str2) => {
      var actual = compare(str1, str2);

      expect(actual).toEqual(true);
    });
  });

  describe("Return false if two strings do not have the same length", () => {
    const data = [
      ["ABC", "DE"],
      ["hello", "edabit"],
      ["jrnvjrnnt", "cvjknfjvmfvnfjn"],
      ["jkvnjrt", "krnf"]
    ];

    test.each(data)("compare(%s, %s) = false", (str1, str2) => {
      var actual = compare(str1, str2);

      expect(actual).toEqual(false);
    });
  });
});
