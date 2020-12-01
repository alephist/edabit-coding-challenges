const isSafeBridge = require("../brokenBridge");

const data = [
  ["####", true],
  ["## ####", false],
  ["#", true],
  ["# #", false]
];

describe("isSafeBridge", () => {
  describe("Return boolean if bridge is safe to cross", () => {
    test.each(data)("isSafeBridge(%p) = %s", (str, expected) => {
      var actual = isSafeBridge(str);

      expect(actual).toEqual(expected);
    });
  });
});
