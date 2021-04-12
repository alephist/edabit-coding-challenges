const validateEmail = require("../basicEmailValidation");

const data = [
  ["@edabit.com", false],
  ["@edabit", false],
  ["matt@edabit.com", true],
  ["", false],
  ["hello.gmail@com", false],
  ["bill.gates@microsoft.com", true],
  ["hello@email", false],
  ["%^%$#%^%", false],
  ["www.email.com", false],
  ["email", false]
];

describe("validateEmail", () => {
  describe("Return boolean if input string is valid email", () => {
    test.each(data)("validateEmail(%p) = %s", (str, result) => {
      let actual = validateEmail(str);

      expect(actual).toEqual(result);
    });
  });
});
