const generation = require("../whichGenerationAreYou");

const data = [
  [-3, "m", "great grandfather"],
  [1, "f", "daughter"],
  [-3, "f", "great grandmother"],
  [-2, "m", "grandfather"],
  [-2, "f", "grandmother"],
  [-1, "m", "father"],
  [-1, "f", "mother"],
  [0, "f", "me!"],
  [1, "m", "son"],
  [1, "f", "daughter"],
  [2, "m", "grandson"],
  [2, "f", "granddaughter"],
  [3, "m", "great grandson"],
  [3, "f", "great granddaughter"],
  [0, "m", "me!"]
];

describe("generation", () => {
  describe("Return the name of an ancestor or descendant", () => {
    test.each(data)("generation(%i, %p) = %p", (x, y, result) => {
      let actual = generation(x, y);

      expect(actual).toEqual(result);
    });
  });
});
