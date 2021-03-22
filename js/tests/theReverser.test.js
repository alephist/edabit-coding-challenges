const reverse = require("../theReverser");

const data = [
  ["Hello World", "DLROw OLLEh"],
  ["ReVeRsE", "eSrEvEr"],
  ["", ""],
  ["Radar", "RADAr"]
];

describe("reverse", () => {
  describe("Return string in reverse order and reverse case", () => {
    test.each(data)("reverse(%p) = %p", (str, result) => {
      let actual = reverse(str);

      expect(actual).toEqual(result);
    });
  });
});
