const isEqual = require("../equalNumbers");

describe("isEqual", () => {
  describe("Return true of two numbers are equal", () => {
    const data = [
      [2, 2],
      [88, 88],
      [1, 1]
    ];

    test.each(data)("%i == %i", (num1, num2) => {
      let actual = isEqual(num1, num2);

      expect(actual).toEqual(true);
    });
  });

  describe("Return false if two numbers are not equal", () => {
    const data = [
      [36, 35],
      [5, 6]
    ];

    test.each(data)("%i != %i", (num1, num2) => {
      let actual = isEqual(num1, num2);

      expect(actual).toEqual(false);
    });
  });

  describe("Return false if one or both numbers are not in number format", () => {
    const data = [
      ["1", 5],
      ["1", 1],
      ["1", "1"]
    ];

    test.each(data)("%i != %i", (num1, num2) => {
      let actual = isEqual(num1, num2);

      expect(actual).toEqual(false);
    });
  });
});
