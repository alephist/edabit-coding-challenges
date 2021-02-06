const isOmnipresent = require("../omnipresentValue");

const data = [
  [
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1]
    ],
    1,
    true
  ],
  [
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1]
    ],
    6,
    false
  ],
  [[[5], [5], [5], [6, 5]], 5, true],
  [[[5], [5], [5], [6, 5]], 6, false],
  [
    [
      [5, 1],
      [5, 1],
      [5, 1],
      [6, 5, 1]
    ],
    1,
    true
  ]
];

describe("isOmnipresent", () => {
  describe("Return boolean if input value is present for a given array", () => {
    test.each(data)("isOmnipresent(%o, %i) = %s", (arr, val, result) => {
      let actual = isOmnipresent(arr, val);

      expect(actual).toEqual(result);
    });
  });
});
