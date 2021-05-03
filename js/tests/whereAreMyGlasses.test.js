const findMyGlasses = require("../whereAreMyGlasses");

const data = [
  [["phone", "O-O", "coins", "keys"], 1],
  [["OO", "wallet", "O##O", "O----O"], 3],
  [["O_O", "O-O", "OwO"], 1],
  [["O--#--O", "dustO---Odust", "more dust"], 1],
  [
    [
      "floor",
      "the floor again",
      "pockets",
      "bed",
      "cabinet",
      "the top of my head O-O"
    ],
    5
  ],
  [["OOOO----~OOO", "-------", "OOOOOOO", "OO-OO-OO-O"], 3]
];

describe("findMyGlasses", () => {
  describe("Return index of item where the glasses pattern match from the array", () => {
    test.each(data)("findMyGlasses(%p) = %i", (arr, result) => {
      let actual = findMyGlasses(arr);

      expect(actual).toEqual(result);
    });
  });
});
