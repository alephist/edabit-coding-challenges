const isValidPhoneNumber = require("../phoneNumberFormat");

const data = [
  ["(123) 456-7890", true],
  ["(1111)555 2345", false],
  ["(098) 123 4567", false],
  ["(123)456-7890", false],
  ["abc(123)456-7890", false],
  ["(123)456-7890abc", false],
  ["abc(123)456-7890abc", false],
  ["abc(123) 456-7890", false],
  ["(123) 456-7890abc", false],
  ["abc(123) 456-7890abc", false],
  ["(123)-456-7890", false],
  ["(123)_456-7890", false],
  ["-123) 456-7890", false],
  ["(519) 505-6498", true]
];

describe("isValidPhoneNumber", () => {
  describe("Return boolean if input string is a valid phone number", () => {
    test.each(data)("isValidPhoneNumber(%p) = %s", (str, result) => {
      let actual = isValidPhoneNumber(str);

      expect(actual).toEqual(result);
    });
  });
});
