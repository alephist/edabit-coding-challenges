const reverseImage = require("../negativeImage");

const data = [
  [
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ],
    [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 0]
    ]
  ],
  [
    [
      [1, 1, 1],
      [0, 0, 0]
    ],
    [
      [0, 0, 0],
      [1, 1, 1]
    ]
  ],
  [
    [
      [1, 0, 0],
      [1, 0, 0]
    ],
    [
      [0, 1, 1],
      [0, 1, 1]
    ]
  ],
  [
    [
      [1, 0, 0, 0, 0],
      [1, 0, 0, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 0],
      [1, 1, 1, 0, 0]
    ],
    [
      [0, 1, 1, 1, 1],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 1]
    ]
  ],
  [
    [
      [1, 1],
      [1, 0],
      [1, 1],
      [1, 1],
      [1, 1]
    ],
    [
      [0, 0],
      [0, 1],
      [0, 0],
      [0, 0],
      [0, 0]
    ]
  ]
];

describe("reverseImage", () => {
  describe("Return reversed values of an image", () => {
    test.each(data)("reverseImage(%o) = %o", (image, result) => {
      let actual = reverseImage(image);

      expect(actual).toEqual(result);
    });
  });
});
