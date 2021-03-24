const specialReverse = require("../reverseWordsWithParticularLetter");

const data = [
  ["word searches are super fun", "s", "word sehcraes are repus fun"],
  ["first man to walk on the moon", "m", "first nam to walk on the noom"],
  [
    "peter piper picked pickled peppers",
    "p",
    "retep repip dekcip delkcip sreppep"
  ],
  ["he went to climb mount everest", "p", "he went to climb mount everest"]
];

describe("specialReverse", () => {
  describe("Return a sentence with reversed words that starts with a particular letter", () => {
    test.each(data)("specialReverse(%p, %p) = %p", (s, c, result) => {
      let actual = specialReverse(s, c);

      expect(actual).toEqual(result);
    });
  });
});
