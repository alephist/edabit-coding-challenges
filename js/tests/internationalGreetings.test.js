const greeting = require("../internationalGreetings");

const data = [
  ["Randy", "Hi! I'm Randy, and I'm from Germany."],
  ["Sam", "Hi! I'm Sam, and I'm from Argentina."],
  ["Monti", "Hi! I'm a guest."],
  ["Trudy", "Hi! I'm a guest."],
  ["Wendy", "Hi! I'm Wendy, and I'm from Japan."]
];

describe("greeting", () => {
  describe("Return greeting message", () => {
    test.each(data)("greeting(%p) = %p", (name, result) => {
      let actual = greeting(name);

      expect(actual).toEqual(result);
    });
  });
});
