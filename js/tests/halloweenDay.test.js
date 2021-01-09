const halloween = require("../halloweenDay");

const data = [
  [new Date("2013/10/31"), "Bonfire toffee"],
  [new Date("2012/07/31"), "toffee"],
  [new Date("2015/10/31"), "Bonfire toffee"],
  [new Date("2011/10/12"), "toffee"],
  [new Date("2008/10/11"), "toffee"]
];

describe("halloween", () => {
  describe("Return 'Bonfire toffee' if date is October 31, else return 'toffee'", () => {
    test.each(data)("halloween(%o) = %s", (dt, result) => {
      let actual = halloween(dt);

      expect(actual).toEqual(result);
    });
  });
});
