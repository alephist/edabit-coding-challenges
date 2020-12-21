const Player = require("../fetchInfoOnSportsPlayer");

const player1 = new Player("Patrick Mahomes", 24, 188, 104);
const player2 = new Player("Jimmy Garoppolo", 28, 188, 102);
const player3 = new Player("Julio Jones", 31, 191, 100);

describe("Player", () => {
  describe("Return age info string", () => {
    const data = [
      [player1, "Patrick Mahomes is age 24"],
      [player2, "Jimmy Garoppolo is age 28"],
      [player3, "Julio Jones is age 31"]
    ];

    test.each(data)("new %s.getAge() = %s", (player, result) => {
      let actual = player.getAge();

      expect(actual).toEqual(result);
    });
  });

  describe("Return height info string", () => {
    const data = [
      [player1, "Patrick Mahomes is 188cm"],
      [player2, "Jimmy Garoppolo is 188cm"],
      [player3, "Julio Jones is 191cm"]
    ];

    test.each(data)("new %s.getHeight() = %s", (player, result) => {
      let actual = player.getHeight();

      expect(actual).toEqual(result);
    });
  });

  describe("Return weight info string", () => {
    const data = [
      [player1, "Patrick Mahomes weighs 104kg"],
      [player2, "Jimmy Garoppolo weighs 102kg"],
      [player3, "Julio Jones weighs 100kg"]
    ];

    test.each(data)("new %s.getWeight() = %s", (player, result) => {
      let actual = player.getWeight();

      expect(actual).toEqual(result);
    });
  });
});
