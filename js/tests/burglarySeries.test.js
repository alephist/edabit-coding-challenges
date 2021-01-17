const { stolenItems, mostExpensiveItem } = require("../burglarySeries");

describe("Burglary Series", () => {
  describe("Part 01: Stolen Items", () => {
    describe("stolenItems", () => {
      describe("Return total amount of burglary, if none, return 'Lucky you!'", () => {
        const data = [
          [{ tv: 30, skate: 20, stereo: 50 }, 100],
          [{ ring: 30000, painting: 20000, bust: 1 }, 50001],
          [{ chair: 3500 }, 3500],
          [{}, "Lucky you!"]
        ];

        test.each(data)("stolenItems(%o) = %p", (obj, result) => {
          let actual = stolenItems(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 02: Most Valuable Item", () => {
    describe("mostExpensiveItem", () => {
      describe("Return the most expensive item on the list", () => {
        const data = [
          [{ tv: 30, skate: 20, stereo: 50 }, "stereo"],
          [{ skate: 20 }, "skate"],
          [{ tv: 30, skate: 20 }, "tv"]
        ];

        test.each(data)("mostExpensiveItem(%o) = %p", (obj, result) => {
          let actual = mostExpensiveItem(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });
});
