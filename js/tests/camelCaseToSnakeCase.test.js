const camelToSnake = require("../camelCaseToSnakeCase");

const data = [
  ["magicCarrots", "magic_carrots"],
  ["greatApples for aSmellyRhino", "great_apples for a_smelly_rhino"],
  ["th1sSh0uldB3FineT00", "th1s_sh0uld_b3_fine_t00"]
];

describe("camelToSnake", () => {
  describe("Return snake case string from input camel case string", () => {
    test.each(data)("camelToSnake(%p) = %p", (str, result) => {
      let actual = camelToSnake(str);

      expect(actual).toEqual(result);
    });
  });
});
