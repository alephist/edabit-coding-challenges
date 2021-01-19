const {
  stolenItems,
  mostExpensiveItem,
  findIt,
  addName,
  thirdMostExpensive,
  convertToNumber
} = require("../burglarySeries");

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

  describe("Part 03: Is It Gone?", () => {
    describe("findIt", () => {
      describe("Return message if pet is gone or not", () => {
        const data = [
          [{}, "rambo", "Rambo is here!"],
          [{}, "heman", "Heman is here!"],
          [{ tv: 30, stereo: 50 }, "rocky", "Rocky is here!"],
          [{ tv: 30, stereo: 50 }, "spiderman", "Spiderman is here!"],
          [{ tv: 30, stereo: 50, julius: 100 }, "julius", "Julius is gone..."],
          [{ tv: 30, stereo: 50, batman: 200 }, "batman", "Batman is gone..."]
        ];

        test.each(data)("findIt(%o, %p) = %p", (obj, name, result) => {
          let actual = findIt(obj, name);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 04: Add Its Name", () => {
    describe("addName", () => {
      describe("Return object with name and value as key-value pairs", () => {
        const data = [
          [{}, "Brutus", 300, { Brutus: 300 }],
          [{ piano: 500 }, "Brutus", 400, { piano: 500, Brutus: 400 }],
          [
            { piano: 500, stereo: 300 },
            "Caligula",
            440,
            { piano: 500, stereo: 300, Caligula: 440 }
          ]
        ];

        test.each(data)(
          "addName(%o, %p, %i) = %o",
          (obj, name, value, result) => {
            let actual = addName(obj, name, value);

            expect(actual).toEqual(result);
          }
        );
      });
    });
  });

  describe("Part 05: Third Most Expensive", () => {
    describe("thirdMostExpensive", () => {
      describe("Return the third most expensive item on the list, otherwise return false", () => {
        const data = [
          [{}, false],
          [{ piano: 100 }, false],
          [{ piano: 100, stereo: 200 }, false],
          [{ piano: 100, stereo: 200, tv: 10 }, "tv"],
          [{ piano: 100, stereo: 200, tv: 10, timmy: 500 }, "piano"],
          [
            { computer: 1000, piano: 500, stereo: 200, tv: 10, timmy: 1 },
            "stereo"
          ]
        ];

        test.each(data)("thirdMostExpensive(%o) = %s", (obj, result) => {
          let actual = thirdMostExpensive(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });

  describe("Part 06: Convert To Number", () => {
    describe("convertToNumber", () => {
      describe("Convert all values of an object to number", () => {
        const data = [
          [
            { piano: "200", tv: "300", stereo: "400" },
            { piano: 200, tv: 300, stereo: 400 }
          ],
          [
            { piano: "200", tv: "300" },
            { piano: 200, tv: 300 }
          ],
          [{ piano: "200" }, { piano: 200 }]
        ];

        test.each(data)("convertToNumber(%o) = %o", (obj, result) => {
          let actual = convertToNumber(obj);

          expect(actual).toEqual(result);
        });
      });
    });
  });
});
