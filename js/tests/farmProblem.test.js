const animals = require("../farmProblem");

const data = [
  [5, 2, 8, 50],
  [3, 4, 7, 50],
  [1, 2, 3, 22],
  [3, 5, 2, 34]
];

describe("animals", () => {
  describe("Get total number of legs from subtotal of each species", () => {
    test.each(data)(
      "Chickens: %i, Cows: %i, Pigs: %i, Total legs: %i",
      (chickens, cows, pigs, total) => {
        var actual = animals(chickens, cows, pigs);

        expect(actual).toEqual(total);
      }
    );
  });
});
