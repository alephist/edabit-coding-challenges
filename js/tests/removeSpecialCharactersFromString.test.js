const removeSpecialCharacters = require("../removeSpecialCharactersFromString");

const data = [
  ["The quick brown fox!", "The quick brown fox"],
  ["%fd76$fd(-6GvKlO.", "fd76fd-6GvKlO"],
  ["D0n$c sed 0di0 du1", "D0nc sed 0di0 du1"],
  ["cat_pic.jpeg", "cat_picjpeg"],
  ["519-555-8093", "519-555-8093"],
  ["h-d+=rf[]_{}<>.,`~!@#$%^&*(|", "h-drf_"],
  [
    "Etiam#!!!!!,,, [`po%rta ~sem!] {male*su-ada} (ma*gna mo^llis... eui$smod???",
    "Etiam porta sem malesu-ada magna mollis euismod"
  ]
];

describe("removeSpecialCharacters", () => {
  describe("Return string without special characters", () => {
    test.each(data)("removeSpecialCharacters(%p) = %p", (str, result) => {
      let actual = removeSpecialCharacters(str);

      expect(actual).toEqual(result);
    });
  });
});
