const gimmeTheLetters = require("../fromAToZ");

const data = [
  ["a-z", "abcdefghijklmnopqrstuvwxyz"],
  ["h-o", "hijklmno"],
  ["Q-Z", "QRSTUVWXYZ"],
  ["J-J", "J"],
  ["a-b", "ab"],
  ["A-A", "A"],
  ["g-i", "ghi"],
  ["H-I", "HI"],
  ["y-z", "yz"],
  ["e-k", "efghijk"],
  ["a-q", "abcdefghijklmnopq"],
  ["F-O", "FGHIJKLMNO"]
];

describe("gimmeTheLetters", () => {
  describe("Return a string which includes all letters within the input spectrum", () => {
    test.each(data)("gimmeTheLetters(%p) = %p", (spectrum, result) => {
      let actual = gimmeTheLetters(spectrum);

      expect(actual).toEqual(result);
    });
  });
});
