const countAdverbs = require("../countingAdverbs");

const data = [
  ["She ran hurriedly towards the stadium.", 1],
  ["She ate the lasagna heartily and noisily.", 2],
  ["He hates potatoes.", 0],
  ["He was happily, crazily, foolishly over the moon.", 3],
  ["She writes poetry beautifully.", 1],
  ["There are many fat geese in the park.", 0],
  ["The horse acted aggressively and stubbornly.", 2],
  ["She forgot where to buy the lysol.", 0],
  ["Ilya ran to the store.", 0]
];

describe("countAdverbs", () => {
  describe("Return count of adverbs in a sentence", () => {
    test.each(data)("countAdverbs(%p) = %i", (sentence, result) => {
      let actual = countAdverbs(sentence);

      expect(actual).toEqual(result);
    });
  });
});
