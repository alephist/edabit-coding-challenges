const acceptIntoMovie = require("../movieTheaterAdmittance");

const data = [
  [14, true, true],
  [15, true, true],
  [16, true, true],
  [14, false, false],
  [15, false, true],
  [16, false, true],
  [14.99999, true, true],
  [14.99999, false, false]
];

describe("acceptIntoMovie", () => {
  describe("Return boolean if a person is allowed to see the movie", () => {
    test.each(data)(
      "acceptIntoMovie(%p, %s) = %s",
      (age, isSupervised, result) => {
        let actual = acceptIntoMovie(age, isSupervised);

        expect(actual).toEqual(result);
      }
    );
  });
});
