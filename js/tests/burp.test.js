const longBurp = require("../burp");

const data = [
  [3, "Burrrp"],
  [5, "Burrrrrp"],
  [9, "Burrrrrrrrrp"],
  [10, "Burrrrrrrrrrp"],
  [13, "Burrrrrrrrrrrrrp"],
  [18, "Burrrrrrrrrrrrrrrrrrp"],
  [1, "Burp"]
];

describe("longBurp", () => {
  describe("Return the string 'Burp' with num amount of Rs", () => {
    test.each(data)("longBurp(%i) = %s", (num, result) => {
      let actual = longBurp(num);

      expect(actual).toEqual(result);
    });
  });
});
