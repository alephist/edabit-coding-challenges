const stutter = require("../stutteringFunction");

const data = [
  ["incredible", "in... in... incredible?"],
  ["am", "am... am... am?"],
  ["outstanding", "ou... ou... outstanding?"]
];

describe("stutter", () => {
  describe("Return stuttered string", () => {
    test.each(data)("stutter(%p) = %p", (word, result) => {
      let actual = stutter(word);

      expect(actual).toEqual(result);
    });
  });
});
