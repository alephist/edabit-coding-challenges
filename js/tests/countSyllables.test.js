const count = require("../countSyllables");

const data = [
  ["buf-fet", 2],
  ["beau-ti-ful", 3],
  ["mon-u-men-tal", 4],
  ["on-o-mat-o-poe-ia", 6],
  ["o-ver-ly", 3],
  ["pas-try", 2],
  ["flu-id", 2],
  ["syl-la-ble", 3]
];

describe("count", () => {
  describe("Return number of syllables", () => {
    test.each(data)("count(%p) = %i", (word, result) => {
      let actual = count(word);

      expect(actual).toEqual(result);
    });
  });
});
