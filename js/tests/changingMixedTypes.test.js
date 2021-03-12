const changeTypes = require("../changingMixedTypes");

const data = [
  [
    ["a", 12, true],
    ["A!", 13, false]
  ],
  [
    [13, "13", "12", "twelve"],
    [13, "13!", "12!", "Twelve!"]
  ],
  [
    [false, "false", "true"],
    [true, "False!", "True!"]
  ]
];

describe("changeTypes", () => {
  describe("Return an array with modified elements", () => {
    test.each(data)("changeTypes(%p) = %p", (arr, result) => {
      let actual = changeTypes(arr);

      expect(actual).toEqual(result);
    });
  });
});
