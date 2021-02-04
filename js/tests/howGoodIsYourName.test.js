const nameScore = require("../howGoodIsYourName");

const data = [
  ["MUBASHIR", "THE BEST"],
  ["MATT", "THE BEST"],
  ["PAKISTAN", "THE BEST"],
  ["AIRFORCE", "THE BEST"],
  ["GUV", "NOT TOO GOOD"],
  ["PUBG", "NOT TOO GOOD"],
  ["ME", "PRETTY GOOD"],
  ["BOB", "PRETTY GOOD"],
  ["JLJ", "PRETTY GOOD"],
  ["YOU", "VERY GOOD"],
  ["FABIO", "VERY GOOD"],
  ["ROBBY", "THE BEST"],
  ["BILL GATES", "THE BEST"]
];

describe("nameScore", () => {
  describe("Return sum of scores based on letters present in a name", () => {
    test.each(data)("nameScore(%p) = %p", (name, result) => {
      let actual = nameScore(name);

      expect(actual).toEqual(result);
    });
  });
});
