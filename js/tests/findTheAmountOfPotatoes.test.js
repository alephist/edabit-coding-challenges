const potatoes = require("../findTheAmountOfPotatoes");

const data = [
  ["potato", 1],
  ["potatopotatocherry", 2],
  ["potatopotatopotatoorange", 3],
  ["potatopotatobananapotatopotato", 4],
  ["potatopotatomangopotatopotatopotato", 5],
  ["potatocucumberpotatopotatopotatopotatopotato", 6]
];

describe("potatoes", () => {
  describe("Return count of potatoes in string", () => {
    test.each(data)("potatoes(%p) = %i", (str, result) => {
      let actual = potatoes(str);

      expect(actual).toEqual(result);
    });
  });
});
