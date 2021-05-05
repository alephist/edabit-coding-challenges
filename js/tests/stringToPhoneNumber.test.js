const dial = require("../stringToPhoneNumber");

const data = [
  ["1-800-HOTLINEBLING", "1-800-468546325464"],
  ["hello-world!", "43556-96753!"],
  ["aaaabcccdefggg", "22222222333444"],
  ["01023468adghijgkmz?", "010234682344454569?"],
  ["SwApPeDcAsE", "79277332273"],
  ["VAPORWAVE", "827679283"]
];

describe("dial", () => {
  describe("Return a string containing the argument with replaced letters", () => {
    test.each(data)("dial(%p) = %p", (str, result) => {
      let actual = dial(str);

      expect(actual).toEqual(result);
    });
  });
});
