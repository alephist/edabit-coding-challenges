const testFairness = require("../chocolateDilemma");

const data = [
  [
    [
      [1, 5],
      [6, 3],
      [1, 1]
    ],
    [
      [7, 1],
      [2, 2],
      [1, 1]
    ],
    false
  ],
  [
    [
      [2, 2],
      [2, 2],
      [2, 2],
      [2, 2]
    ],
    [[4, 4]],
    true
  ],
  [
    [
      [1, 2],
      [2, 1]
    ],
    [[2, 2]],
    true
  ],
  [
    [
      [1, 2],
      [2, 1]
    ],
    [
      [2, 2],
      [4, 4]
    ],
    false
  ],
  [
    [
      [2, 4],
      [1, 1],
      [11, 1]
    ],
    [
      [2, 2],
      [4, 4]
    ],
    true
  ]
];

describe("testFairness", () => {
  describe("Return boolean if total area of chocolate is the same for each sister", () => {
    test.each(data)("testFairness(%p, %p) = %s", (agatha, bertha, result) => {
      let actual = testFairness(agatha, bertha);

      expect(actual).toEqual(result);
    });
  });
});
