const parseCode = require("../encodedStringParse");

const data = [
  ["John000Doe000123", { firstName: "John", lastName: "Doe", id: "123" }],
  [
    "Michael0Smith004331",
    { firstName: "Michael", lastName: "Smith", id: "4331" }
  ],
  [
    "Thomas0000Lee0000045553",
    { firstName: "Thomas", lastName: "Lee", id: "45553" }
  ],
  ["a0b01", { firstName: "a", lastName: "b", id: "1" }]
];

describe("parseCode", () => {
  describe("Return object containing firstName, lastName and id from an encoded string", () => {
    test.each(data)("parseCode(%p) = %p", (str, result) => {
      let actual = parseCode(str);

      expect(actual).toEqual(result);
    });
  });
});
