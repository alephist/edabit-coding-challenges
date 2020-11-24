const { reverse, flipBool } = require("../flipTheBoolean");

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

describe("flipBool", () => {
  describe("Return the opposite of the given boolean as a number", () => {
    const data = [
      [1, 0],
      [true, 0],
      [0, 1],
      [false, 1]
    ];

    test.each(data)("flipBool(%s) = %s", (bool, expected) => {
      var actual = flipBool(bool);

      expect(actual).toEqual(expected);
    });
  });
});
