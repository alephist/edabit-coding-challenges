const checkTitle = require("../checkIfTitleString");

const data = [
  ["A Mind Boggling Achievement", true],
  ["A Simple Java Script Program!", true],
  ["Water is transparent", false]
];

describe("checkTitle", () => {
  describe("Return boolean of input string is a title string", () => {
    test.each(data)("checkTitle(%p) = %p", (title, result) => {
      let actual = checkTitle(title);

      expect(actual).toEqual(result);
    });
  });
});
