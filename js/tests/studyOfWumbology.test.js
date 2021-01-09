const wumbo = require("../studyOfWumbology");

const data = [
  [
    "WHAT DO YOU MEAN WE'RE OUT OF MONEY",
    "WHAT DO YOU WEAN WE'RE OUT OF WONEY"
  ],
  ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "ABCDEFGHIJKLWNOPQRSTUVWXYZ"],
  ["1 WUMBO 2 WUMBO 3 WUMBO 4", "1 WUWBO 2 WUWBO 3 WUWBO 4"]
];

describe("wumbo", () => {
  describe("Return string with M's turned to W's", () => {
    test.each(data)("wumbo(%s) = %s", (str, result) => {
      let actual = wumbo(str);

      expect(actual).toEqual(result);
    });
  });
});
