const capToFront = require("../capitalLettersToFront");

const data = [
  ["hApPy", "APhpy"],
  ["moveMENT", "MENTmove"],
  ["aPPlE", "PPEal"],
  ["shOrtCAKE", "OCAKEshrt"]
];

describe("capToFront", () => {
  describe("Return string with all capital letters to the front", () => {
    test.each(data)("capToFront(%p) = %p", (str, result) => {
      let actual = capToFront(str);

      expect(actual).toEqual(result);
    });
  });
});
