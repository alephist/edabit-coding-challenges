const findLargestNums = require("../largestNumbersInGroupOfArrays");

const data = [
  [
    [
      [4, 2, 7, 1],
      [20, 70, 40, 90],
      [1, 2, 0]
    ],
    [7, 90, 2]
  ],
  [
    [
      [0.4321, 0.7634, 0.652],
      [1.324, 9.32, 2.5423, 6.4314],
      [9, 3, 6, 3]
    ],
    [0.7634, 9.32, 9]
  ],
  [
    [
      [-34, -54, -74],
      [-32, -2, -65],
      [-54, 7, -43]
    ],
    [-34, -2, 7]
  ],
  [
    [
      [0.34, -5, 1.34],
      [-6.432, -1.762, -1.99],
      [32, 65, -6]
    ],
    [1.34, -1.762, 65]
  ],
  [
    [
      [0, 0, 0, 0],
      [3, 3, 3, 3],
      [-2, -2]
    ],
    [0, 3, -2]
  ]
];

describe("findLargestNums", () => {
  describe("Return array containing largest numbers from each inner arrays", () => {
    test.each(data)("findLargestNums(%o) = %p", (arr, result) => {
      let actual = findLargestNums(arr);

      expect(actual).toEqual(result);
    });
  });
});
