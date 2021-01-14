const toArray = require("../convertObjectToArray");

const data = [
  [
    { a: 1, b: 2 },
    [
      ["a", 1],
      ["b", 2]
    ]
  ],
  [
    { foo: 33, bar: 45, baz: 67 },
    [
      ["foo", 33],
      ["bar", 45],
      ["baz", 67]
    ]
  ],
  [
    { shrimp: 15, tots: 12 },
    [
      ["shrimp", 15],
      ["tots", 12]
    ]
  ],
  [{}, []]
];

describe("toArray", () => {
  describe("Return an array of key-value pair from object", () => {
    test.each(data)("toArray(%o) = %o", (obj, result) => {
      let actual = toArray(obj);

      expect(actual).toEqual(result);
    });
  });
});
