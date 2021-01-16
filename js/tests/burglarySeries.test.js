const { stolenItems } = require("../burglarySeries");

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
});
