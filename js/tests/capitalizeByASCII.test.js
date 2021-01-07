const asciiCapitalize = require("../capitalizeByASCII");

const data = [
  ["Oh what a beautiful morning.", "oH wHaT a BeauTiFuL moRNiNg."],
  ["THE LITTLE MERMAID", "THe LiTTLe meRmaiD"],
  ["to be or not to be!", "To Be oR NoT To Be!"]
];

describe("asciiCapitalize", () => {
  describe("Capitalize letter if ASCII code is even", () => {
    test.each(data)("asciiCapitalize(%p) = %p", (str, result) => {
      let actual = asciiCapitalize(str);

      expect(actual).toEqual(result);
    });
  });
});
