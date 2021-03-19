const removeABC = require("../removeLettersABC");

const data = [
  ["This might be a bit hard", "This might e  it hrd"],
  ["This is awesome", "This is wesome"],
  ["hello world!", null],
  ["coding is fun!", "oding is fun!"],
  ["", null]
];

describe("removeABC", () => {
  describe("Return string without the letters a, b and c", () => {
    test.each(data)("removeABC(%p) = %p", (str, result) => {
      let actual = removeABC(str);

      expect(actual).toEqual(result);
    });
  });
});
