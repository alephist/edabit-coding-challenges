const charAppears = require("../numberOfTimesCharacterAppears");

const data = [
  ["She sells sea shells by the seashore.", "s", [1, 2, 1, 2, 0, 0, 2]],
  [
    "Peter Piper picked a peck of pickled peppers.",
    "p",
    [1, 2, 1, 0, 1, 0, 1, 3]
  ],
  [
    "She hiked in the morning, then swam in the river.",
    "t",
    [0, 0, 0, 1, 0, 1, 0, 0, 1, 0]
  ],
  [
    "I scream, you scream, we all scream for ice cream.",
    "f",
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]
  ],
  ["Snap, crackle, pop!", "p", [1, 0, 2]],
  ["What a wonderful world.", "w", [1, 0, 1, 1]]
];

describe("charAppears", () => {
  describe("Return number of times a character appears in each word in a sentence", () => {
    test.each(data)("charAppears(%p, %p) = %p", (sentence, char, result) => {
      let actual = charAppears(sentence, char);

      expect(actual).toEqual(result);
    });
  });
});
