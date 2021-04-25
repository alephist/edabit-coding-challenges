const numInStr = require("../numberInStrings");

const data = [
  [["abc", "abc10"], ["abc10"]],
  [
    ["abc", "ab10c", "a10bc", "bcd"],
    ["ab10c", "a10bc"]
  ],
  [["1", "a", " ", "b"], ["1"]],
  [["rct", "ABC", "Test", "xYz"], []],
  [
    ["this IS", "10xYZ", "xy2K77", "Z1K2W0", "xYz"],
    ["10xYZ", "xy2K77", "Z1K2W0"]
  ],
  [["-/>", "10bc", "abc "], ["10bc"]]
];

describe("numInStr", () => {
  describe("Return array of strings with numbers", () => {
    test.each(data)("numInStr(%p) = %p", (arr, result) => {
      let actual = numInStr(arr);

      expect(actual).toEqual(result);
    });
  });
});
