const helloName = require("../nameGreeting");

const data = [
  ["Gerald", "Hello Gerald!"],
  ["Fatima", "Hello Fatima!"],
  ["Ed", "Hello Ed!"],
  ["Tiffany", "Hello Tiffany!"]
];

describe("helloName", () => {
  describe("Return a greeting from name input", () => {
    test.each(data)("Input: %s, Output: %s", (name, expected) => {
      var actual = helloName(name);

      expect(actual).toEqual(expected);
    });
  });
});
