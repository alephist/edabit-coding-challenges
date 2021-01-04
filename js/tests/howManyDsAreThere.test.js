const countDs = require("../howManyDsAreThere");

const data = [
  ["My friend Dylan got distracted at school", 4],
  ["Debris was scattered all over the place.", 2],
  ["The rodents hibernated in their den.", 3]
];

describe("countDs", () => {
  describe("Return count of Ds in a sentence", () => {
    test.each(data)("countDs(%s) = %i", (sentence, result) => {
      let actual = countDs(sentence);

      expect(actual).toEqual(result);
    });
  });
});
