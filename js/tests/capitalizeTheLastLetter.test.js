const capLast = require("../capitalizeTheLastLetter");

const data = [
  ["hello", "hellO"],
  ["My Name Is Edabit", "MY NamE IS EdabiT"],
  ["HELp THe LASt LETTERs CAPITALISe", "HELP THE LAST LETTERS CAPITALISE"],
  ["hellooooo", "hellooooO"],
  ["hahA I aM alreadY capitaliseD", "hahA I aM alreadY capitaliseD"]
];

describe("capLast", () => {
  describe("Return string with each letter of the words are capitalized", () => {
    test.each(data)("capLast(%p) = %p", (txt, result) => {
      let actual = capLast(txt);

      expect(actual).toEqual(result);
    });
  });
});
