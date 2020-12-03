const countTrue = require("../howMuchIsTrue");

const data = [
  [[true, false, false, true, false], 2],
  [[false, false, false, false], 0],
  [[], 0],
  [
    [
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      false
    ],
    8
  ],
  [[true, false, true, true, false, false, false, false, false], 3],
  [
    [
      false,
      true,
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false
    ],
    8
  ],
  [[true, false, true, true, true, false, true, true, false, false], 6],
  [
    [false, false, false, false, true, false, true, false, true, false, false],
    3
  ],
  [
    [true, false, false, false, true, false, false, true, false, false, false],
    3
  ],
  [[true, true, false, true, false, false, false, false, true, false], 4],
  [
    [
      true,
      false,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false
    ],
    9
  ],
  [
    [
      true,
      false,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      false,
      false
    ],
    8
  ],
  [
    [
      true,
      true,
      false,
      false,
      false,
      false,
      true,
      false,
      true,
      true,
      false,
      true
    ],
    6
  ]
];

describe("countTrue", () => {
  describe("Return number of true values", () => {
    test.each(data)("countTrue(%p) = %i", (arr, expected) => {
      var actual = countTrue(arr);

      expect(actual).toEqual(expected);
    });
  });
});
