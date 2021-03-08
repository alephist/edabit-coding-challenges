const getBestStudent = require("../studentWithBestTestAvg");

const data = [
  [
    {
      John: [100, 90, 80],
      Bob: [100, 70, 80]
    },
    "John"
  ],
  [
    {
      Susan: [67, 84, 75, 63],
      Mike: [87, 98, 64, 71],
      Jim: [90, 58, 73, 86]
    },
    "Mike"
  ],
  [
    {
      Tim: [93, 84, 49, 71, 76, 83],
      Nick: [88, 91, 74, 72, 63, 68],
      Brad: [100, 94, 72, 64, 58, 81],
      Annie: [79, 93, 82, 82, 63, 87]
    },
    "Annie"
  ],
  [
    {
      Eddie: [65, 85, 72, 76],
      Brock: [55, 97, 82, 91],
      Jessica: [78, 62, 79, 99]
    },
    "Brock"
  ]
];

describe("getBestStudent", () => {
  describe("Return the student's name with highest average", () => {
    test.each(data)("getBestStudent(%p) = %p", (grades, result) => {
      let actual = getBestStudent(grades);

      expect(actual).toEqual(result);
    });
  });
});
