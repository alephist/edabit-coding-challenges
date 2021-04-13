const remix = require("../remixTheString");

const data = [
  ["abcd", [0, 3, 1, 2], "acdb"],
  ["PlOt", [1, 3, 0, 2], "OPtl"],
  ["computer", [0, 2, 1, 5, 3, 6, 7, 4], "cmourpte"],
  ["twist", [4, 0, 1, 2, 3], "wistt"],
  [
    "responsibility",
    [0, 6, 8, 11, 10, 7, 13, 5, 3, 2, 4, 12, 1, 9],
    "rtibliensyopis"
  ],
  ["Interference", [6, 9, 10, 11, 7, 3, 0, 2, 5, 1, 8, 4], "enrfeeIrcnte"],
  ["sequence", [5, 7, 3, 4, 0, 1, 2, 6], "encqusee"]
];

describe("remix", () => {
  describe("Return remixed string", () => {
    test.each(data)("remix(%p, %p) = %p", (str, arr, result) => {
      let actual = remix(str, arr);

      expect(actual).toEqual(result);
    });
  });
});
