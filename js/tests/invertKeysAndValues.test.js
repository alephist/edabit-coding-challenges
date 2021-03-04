const invert = require("../invertKeysAndValues");

const data = [
  [
    { a: 1, b: 2, c: 3 },
    { 1: "a", 2: "b", 3: "c" }
  ],
  [
    { z: "q", w: "f" },
    { q: "z", f: "w" }
  ],
  [
    { zebra: "koala", horse: "camel" },
    { koala: "zebra", camel: "horse" }
  ]
];

describe("invert", () => {
  describe("Return object with keys and values inverted", () => {
    test.each(data)("invert(%p) = %p", (obj, result) => {
      let actual = invert(obj);

      expect(actual).toEqual(result);
    });
  });
});
