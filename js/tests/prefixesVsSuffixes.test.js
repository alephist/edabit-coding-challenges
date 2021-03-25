const { isPrefix, isSuffix } = require("../prefixesVsSuffixes");

describe("isPrefix", () => {
  describe("Return boolean if word begins with input prefix", () => {
    const data = [
      ["automation", "auto-", true],
      ["superfluous", "super-", true],
      ["oration", "mega-", false],
      ["retrospect", "sub-", false]
    ];

    test.each(data)("isPrefix(%p, %p) = %s", (word, prefix, result) => {
      let actual = isPrefix(word, prefix);

      expect(actual).toEqual(result);
    });
  });
});

describe("isSuffix", () => {
  describe("Return boolean if word ends with input suffix", () => {
    const data = [
      ["arachnophobia", "-phobia", true],
      ["rhinoplasty", "-plasty", true],
      ["movement", "-scope", false],
      ["vocation", "-logy", false]
    ];

    test.each(data)("isSuffix(%p, %p) = %s", (word, suffix, result) => {
      let actual = isSuffix(word, suffix);

      expect(actual).toEqual(result);
    });
  });
});
