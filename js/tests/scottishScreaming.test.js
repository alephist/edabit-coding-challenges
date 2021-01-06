const toScottishScreaming = require("../scottishScreaming");

const data = [
  ["lorem ipsum", "LEREM EPSEM"],
  ["Leeroy jenkins!", "LEEREY JENKENS!"],
  [
    "A, wonderful, day, don't, you, think?",
    "E, WENDERFEL, DEY, DEN'T, YEE, THENK?"
  ],
  ["Hello world", "HELLE WERLD"],
  ["start queueing you oafs", "STERT QEEEEENG YEE EEFS"]
];

describe("toScottishScreaming", () => {
  describe('Return string capitalized and all vowels replaced with "E"', () => {
    test.each(data)("toScottishScreaming(%p) = %p", (str, result) => {
      let actual = toScottishScreaming(str);

      expect(actual).toEqual(result);
    });
  });
});
