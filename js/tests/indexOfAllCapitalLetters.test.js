const indexOfCaps = require("../indexOfAllCapitalLetters");

const data = [
  ["eDaBiT", [1, 3, 5]],
  ["eQuINoX", [1, 3, 4, 6]],
  ["determine", []],
  ["STRIKE", [0, 1, 2, 3, 4, 5]],
  ["sUn", [1]],
  ["SpiDer", [0, 3]],
  ["accOmpAnY", [3, 6, 8]],
  ["@xCE#8S#i*$en", [2, 3, 6]],
  ["1854036297", []],
  ["Fo?.arg~{86tUx=|OqZ!", [0, 12, 16, 18]]
];

describe("indexOfCaps", () => {
  describe("Return an array of indices of capital letters from a string", () => {
    test.each(data)("indexOfCaps(%p) = %p", (str, result) => {
      let actual = indexOfCaps(str);

      expect(actual).toEqual(result);
    });
  });
});
