const getXP = require("../edabitExperiencePoints");

const data = [
  [
    {
      "Very Easy": 89,
      Easy: 77,
      Medium: 30,
      Hard: 4,
      "Very Hard": 1
    },
    "2055XP"
  ],
  [
    {
      "Very Easy": 254,
      Easy: 32,
      Medium: 65,
      Hard: 51,
      "Very Hard": 34
    },
    "7650XP"
  ],
  [
    {
      "Very Easy": 11,
      Easy: 0,
      Medium: 2,
      Hard: 0,
      "Very Hard": 27
    },
    "2255XP"
  ]
];

describe("getXP", () => {
  describe("Return total XP of the user", () => {
    test.each(data)("getXP(%o) = %p", (obj, result) => {
      let actual = getXP(obj);

      expect(actual).toEqual(result);
    });
  });
});
