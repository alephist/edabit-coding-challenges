const getDrinkID = require("../fruitJuices");

const data = [
  ["apple", "500ml", "APP500"],
  ["pineapple", "45ml", "PIN45"],
  ["orange", "750ml", "ORA750"],
  ["passion fruit", "1ml", "PASFRU1"],
  ["mango", "1000ml", "MAN1000"],
  ["very berry", "253ml", "VERBER253"],
  ["raspberry and lime", "350ml", "RASANDLIM350"]
];

describe("getDrinkID", () => {
  describe("Return product ID of juice from input flavor and capacity", () => {
    test.each(data)("getDrinkId(%p, %p) = %p", (flavor, ml, result) => {
      let actual = getDrinkID(flavor, ml);

      expect(actual).toEqual(result);
    });
  });
});
