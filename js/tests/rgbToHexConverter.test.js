const rgbToHex = require("../rgbToHexConverter");

const data = [
  ["rgb(0, 128, 192)", "#0080c0"],
  ["rgb(45, 255, 192)", "#2dffc0"],
  ["rgb(255, 255, 255)", "#ffffff"],
  ["rgb(192, 192, 192)", "#c0c0c0"],
  ["rgb(255, 0, 0)", "#ff0000"],
  ["rgb(0, 0, 255)", "#0000ff"],
  ["rgb(0, 0, 0)", "#000000"],
  ["rgb(11, 12, 13)", "#0b0c0d"]
];

describe("rgbToHex", () => {
  describe("Return hex color format from input rgb color format", () => {
    test.each(data)("rgbToHex(%p) = %p", (col, result) => {
      let actual = rgbToHex(col);

      expect(actual).toEqual(result);
    });
  });
});
