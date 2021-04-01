const mumbling = require("../mumblingChallenge");

const data = [
  ["MubAshIr", "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr"],
  ["maTT", "M-Aa-Ttt-Tttt"],
  ["airForce", "A-Ii-Rrr-Ffff-Ooooo-Rrrrrr-Ccccccc-Eeeeeeee"],
  ["EdaBit", "E-Dd-Aaa-Bbbb-Iiiii-Tttttt"],
  ["PaKiStAn", "P-Aa-Kkk-Iiii-Sssss-Tttttt-Aaaaaaa-Nnnnnnnn"]
];

describe("mumbling", () => {
  describe("Return string with repeated characters separated with a dash", () => {
    test.each(data)("mumbling(%p) = %p", (str, result) => {
      let actual = mumbling(str);

      expect(actual).toEqual(result);
    });
  });
});
