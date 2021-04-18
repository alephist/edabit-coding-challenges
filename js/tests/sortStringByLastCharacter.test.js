const sortByLast = require("../sortStringByLastCharacter");

const data = [
  ["herb camera dynamic", "camera herb dynamic"],
  ["stab traction artist approach", "stab approach traction artist"],
  [
    "sample partner autonomy swallow trend",
    "trend sample partner swallow autonomy"
  ],
  [
    "dividend platform pupil conclusion silence breakfast",
    "dividend silence pupil platform conclusion breakfast"
  ],
  ["harm", "harm"],
  [
    "card warrant opinion medium illustrate",
    "card illustrate medium opinion warrant"
  ],
  ["cause fine virtue", "cause fine virtue"],
  [
    "introduce fashionable cause sacrifice reality",
    "introduce fashionable cause sacrifice reality"
  ],
  [
    "brick moral institution loud talk resign worth",
    "loud worth brick talk moral institution resign"
  ]
];

describe("sortByLast", () => {
  describe("Return string of words sorted by last character of each word", () => {
    test.each(data)("sortByLast(%p) = %p", (str, result) => {
      let actual = sortByLast(str);

      expect(actual).toEqual(result);
    });
  });
});
