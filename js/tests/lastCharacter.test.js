const modifyLast = require("../lastCharacter");

const data = [
  ["Hello", 3, "Hellooo"],
  ["hey", 6, "heyyyyyy"],
  ["plsssss!1!", 5, "plsssss!1!!!!!"],
  ["gr", 2, "grr"],
  ["excuse me what?", 5, "excuse me what?????"],
  ["123", 5, "1233333"],
  ["a", 3, "aaa"],
  ["STOP", 3, "STOPPP"]
];

describe("modifyLast", () => {
  describe("Return string with last character repeated n times", () => {
    test.each(data)("modifyLast(%p, %i) = %p", (str, n, result) => {
      var actual = modifyLast(str, n);

      expect(actual).toEqual(result);
    });
  });
});
