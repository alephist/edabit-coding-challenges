const societyName = require("../secretSociety");

const data = [
  [["Adam", "Sarah", "Malcolm"], "AMS"],
  [["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"], "CJMPRR"],
  [["Harry", "Newt", "Luna", "Cho"], "CHLN"],
  [["Sherlock", "Irene", "John"], "IJS"],
  [["Sheldon", "Amy", "Penny", "Howard", "Raj"], "AHPRS"]
];

describe("societyName", () => {
  describe("Return name of secret society", () => {
    test.each(data)("societyName(%p) = %s", (friends, result) => {
      let actual = societyName(friends);

      expect(actual).toEqual(result);
    });
  });
});
