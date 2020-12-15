const spaceMeOut = require("../spaceBetweenCharacters");

const data = [
  ["space", "s p a c e"],
  ["far out", "f a r   o u t"],
  ["elongated musk", "e l o n g a t e d   m u s k"],
  ["long", "l o n g"],
  ["123", "1 2 3"],
  ["a1b2c3", "a 1 b 2 c 3"]
];

describe("spaceMeOut", () => {
  describe("Return string with spaces between characters", () => {
    test.each(data)("spaceMeOut(%p) = %p", (str, result) => {
      let actual = spaceMeOut(str);

      expect(actual).toEqual(result);
    });
  });
});
