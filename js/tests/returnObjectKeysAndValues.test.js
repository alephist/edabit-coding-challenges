const keysAndValues = require("../returnObjectKeysAndValues");

const data = [
  [
    { a: 1, b: 2, c: 3 },
    [
      ["a", "b", "c"],
      [1, 2, 3]
    ]
  ],
  [
    { a: "Apple", b: "Microsoft", c: "Google" },
    [
      ["a", "b", "c"],
      ["Apple", "Microsoft", "Google"]
    ]
  ],
  [
    { key1: true, key2: false, key3: undefined },
    [
      ["key1", "key2", "key3"],
      [true, false, undefined]
    ]
  ],
  [
    { 1: null, 2: null, 3: null },
    [
      ["1", "2", "3"],
      [null, null, null]
    ]
  ],
  [
    { key1: "cat", key2: "dog", key3: null },
    [
      ["key1", "key2", "key3"],
      ["cat", "dog", null]
    ]
  ]
];

describe("keysAndValues", () => {
  describe("Return array of keys and array of values from object", () => {
    test.each(data)("keysAndValues(%o) = %o", (obj, result) => {
      let actual = keysAndValues(obj);

      expect(actual).toEqual(result);
    });
  });
});
