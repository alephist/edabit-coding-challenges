const charCount = require("../charInstancesInString");

const data = [
  ["a", "edabit", 1],
  ["b", "big fat bubble", 4],
  ["c", "Chamber of secrets", 1],
  ["f", "frank and his friends have offered five foxes for sale", 7],
  ["x", "edabit", 0],
  ["a", "Adam and Eve bit the apple and found a snake", 6],
  ["s", "sssssssssssssssssssssssss", 25],
  ["7", "10795426697", 2]
];

describe("charCount", () => {
  describe("Return number of times the character is found in string", () => {
    test.each(data)("charCount(%p, %p) = %i", (myChar, str, result) => {
      var actual = charCount(myChar, str);

      expect(actual).toEqual(result);
    });
  });
});
