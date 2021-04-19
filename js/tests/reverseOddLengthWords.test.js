const reverseOdd = require("../reverseOddLengthWords");

const data = [
  ["One two three four", "enO owt eerht four"],
  [
    "Make sure uoy only esrever sdrow of ddo length",
    "Make sure you only reverse words of odd length"
  ],
  ["", "", "Should work with empty string."],
  ["Bananas", "sananaB", "Should work with only one word."],
  [
    "Even even even even even even even even even",
    "Even even even even even even even even even"
  ],
  [
    "Odd odd odd odd odd odd odd odd odd odd odd",
    "ddO ddo ddo ddo ddo ddo ddo ddo ddo ddo ddo"
  ]
];

describe("reverseOdd", () => {
  describe("Return string with all the words that have odd length reversed", () => {
    test.each(data)("reverseOdd(%p) = %p", (str, result) => {
      let actual = reverseOdd(str);

      expect(actual).toEqual(result);
    });
  });
});
