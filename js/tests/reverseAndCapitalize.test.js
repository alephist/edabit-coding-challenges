const reverseCapitalize = require("../reverseAndCapitalize");

const data = [
  ["edabit", "TIBADE"],
  ["abc", "CBA"],
  ["hellothere", "EREHTOLLEH"],
  ["input", "TUPNI"],
  ["indubitably", "YLBATIBUDNI"]
];

describe("reverseCapitalize", () => {
  describe("Return reversed and uppercase string", () => {
    test.each(data)("reverseCapitalize(%s) = %s", (str, result) => {
      let actual = reverseCapitalize(str);

      expect(actual).toEqual(result);
    });
  });
});
