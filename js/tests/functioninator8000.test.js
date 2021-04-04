const inatorInator = require("../functioninator8000");

const data = [
  ["Shrink", "Shrinkinator 6000"],
  ["Doom", "Doominator 4000"],
  ["EvilClone", "EvilClone-inator 9000"],
  ["Destroy", "Destroyinator 7000"],
  ["a", "a-inator 1000"],
  ["Shrek", "Shrekinator 5000"],
  ["bEE", "bEE-inator 3000"],
  ["CAPITALISE", "CAPITALISE-inator 10000"]
];

describe("inatorInator", () => {
  describe("Return string with -inator at the name of the invention and length of invention name with '000'", () => {
    test.each(data)("inatorInator(%p) = %p", (inv, result) => {
      let actual = inatorInator(inv);

      expect(actual).toEqual(result);
    });
  });
});
