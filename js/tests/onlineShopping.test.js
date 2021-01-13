const freeShipping = require("../onlineShopping");

const data = [
  [{ Shampoo: 5.99, "Rubber Ducks": 15.99 }, false],
  [{ "Flatscreen TV": 399.99 }, true],
  [{ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 }, true],
  [{ Scrabble: 12.32, Jenga: 5.55, Clue: 20.0 }, false],
  [
    {
      "Elephant Plushie": 40.55,
      "Octopus Plushie": 20.33,
      "Spongebob Plushie": 20.0
    },
    true
  ]
];

describe("freeShipping", () => {
  describe("Return true if total cost exceeds $50 for free shipping", () => {
    test.each(data)("freeShipping(%o) = %s", (order, result) => {
      let actual = freeShipping(order);

      expect(actual).toEqual(result);
    });
  });
});
