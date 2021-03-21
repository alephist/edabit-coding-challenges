const cardHide = require("../hidingTheCardNumber");

const data = [
  ["1234123456785678", "************5678"],
  ["8754456321113213", "************3213"],
  ["35123413355523", "**********5523"]
];

describe("cardHide", () => {
  describe("Return card number that displays only the last four characters", () => {
    test.each(data)("cardHide(%p) = %p", (card, result) => {
      let actual = cardHide(card);

      expect(actual).toEqual(result);
    });
  });
});
