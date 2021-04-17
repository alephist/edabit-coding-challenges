const evalFactorial = require("../evaluatingFactorials");

const data = [
  [["2!", "3!"], 8],
  [["5!", "4!", "2!"], 146],
  [["0!", "1!"], 2],
  [["5!", "5!", "10!"], 3629040],
  [["6!", "3!"], 726],
  [["2!", "2!", "1!", "1!"], 6]
];

describe("evalFactorial", () => {
  describe("Return sum of factorials from an array of factorial expressions", () => {
    test.each(data)("evalFactorial(%p) = %i", (arr, result) => {
      let actual = evalFactorial(arr);

      expect(actual).toEqual(result);
    });
  });
});
