const tallestSkyscraper = require("../tallestSkyscraper");

const data = [
  [
    [
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 1, 1]
    ],
    3
  ],
  [
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [1, 1, 1, 1]
    ],
    4
  ],
  [
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 1, 1, 1]
    ],
    2
  ],
  [
    [
      [0, 0, 0, 1],
      [0, 0, 0, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1]
    ],
    4
  ],
  [
    [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1]
    ],
    2
  ],
  [
    [
      [0, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1]
    ],
    5
  ]
];

describe("tallestSkyscraper", () => {
  describe("Return the height of the skyscraper", () => {
    test.each(data)("tallestSkyscraper(%o) = %i", (arr, result) => {
      let actual = tallestSkyscraper(arr);

      expect(actual).toEqual(result);
    });
  });
});
