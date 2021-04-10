const toHex = require("../convertToHex");

const data = [
  ["Big Boi", "42 69 67 20 42 6f 69"],
  ["Marty Poppinson", "4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e"],
  ["abcdefghi", "61 62 63 64 65 66 67 68 69"],
  ["oh dear", "6f 68 20 64 65 61 72"],
  ["i hate C#", "69 20 68 61 74 65 20 43 23"],
  [
    "i love C++ , not really",
    "69 20 6c 6f 76 65 20 43 2b 2b 20 2c 20 6e 6f 74 20 72 65 61 6c 6c 79"
  ]
];

describe("toHex", () => {
  describe("Return hexadecimal values of all characters from input string in string format", () => {
    test.each(data)("toHex(%p) = %p", (str, result) => {
      let actual = toHex(str);

      expect(actual).toEqual(result);
    });
  });
});
