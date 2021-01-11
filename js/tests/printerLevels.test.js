const inkLevels = require("../printerLevels");

const data = [
  [{ cyan: 23, magenta: 12, yellow: 10 }, 10],
  [{ cyan: 432, magenta: 543, yellow: 777 }, 432],
  [{ cyan: 700, magenta: 700, yellow: 0 }, 0],
  [{ cyan: 70, magenta: 700, yellow: 1 }, 1],
  [{ cyan: 6543, magenta: 74543, yellow: 2345678 }, 6543],
  [{ cyan: 1, magenta: 1, yellow: 1 }, 1],
  [{ cyan: 700, magenta: 700, yellow: 700 }, 700]
];

describe("inkLevels", () => {
  describe("Return maximum number of pages the printer can print", () => {
    test.each(data)("inkLevels(%p) = %i", (inks, result) => {
      let actual = inkLevels(inks);

      expect(actual).toEqual(result);
    });
  });
});
