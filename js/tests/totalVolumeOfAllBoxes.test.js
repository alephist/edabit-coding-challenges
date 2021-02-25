const totalVolume = require("../totalVolumeOfAllBoxes");

const data = [
  [
    [
      [4, 2, 4],
      [3, 3, 3],
      [1, 1, 2],
      [2, 1, 1]
    ],
    63
  ],
  [
    [
      [2, 2, 2],
      [2, 1, 1]
    ],
    10
  ],
  [[[1, 1, 1]], 1],
  [
    [
      [5, 1, 10],
      [1, 9, 2]
    ],
    68
  ],
  [
    [
      [1, 1, 5],
      [3, 3, 1]
    ],
    14
  ]
];

describe("totalVolume", () => {
  describe("Return total volume of all boxes", () => {
    test.each(data)("totalVolume(%o) = %i", (boxes, result) => {
      let actual = totalVolume(boxes);

      expect(actual).toEqual(result);
    });
  });
});
