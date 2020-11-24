const reverse = require("../flipTheBoolean");

describe("reverse", () => {
  describe("Return reversed boolean value if argument is boolean type", () => {
    const data = [
      [true, false],
      [false, true]
    ];

    test.each(data)("reverse(%s) = %s", (bool, expected) => {
      var actual = reverse(bool);

      expect(actual).toEqual(expected);
    });
  });

  describe("Return 'boolean expected of argument is not boolean type'", () => {
    const data = [0, null, undefined, {}];

    test.each(data)("reverse(%o) = 'boolean expected'", (bool) => {
      var actual = reverse(bool);

      expect(actual).toEqual("boolean expected");
    });
  });
});
