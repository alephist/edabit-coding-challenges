const isEmpty = require("../isObjectEmpty");

const data = [
  [{}, true],
  [{ a: 1 }, false],
  [{ z: 2, w: 4, y: 5 }, false]
];

describe("isEmpty", () => {
  describe("Return boolean of input object is empty", () => {
    test.each(data)("isEmpty(%p) = %s", (obj, result) => {
      let actual = isEmpty(obj);

      expect(actual).toEqual(result);
    });
  });
});
