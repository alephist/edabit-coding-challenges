const products = require("../priceyProducts");

const data = [
  [{ Computer: 600, TV: 800, Radio: 100 }, ["TV", "Computer"]],
  [{ Bike1: 510, Bike2: 401, Bike3: 501 }, ["Bike1", "Bike3"]],
  [
    { "Calvin Klein": 500, Armani: 5000, "Dolce & Gabbana": 2000 },
    ["Armani", "Dolce & Gabbana", "Calvin Klein"]
  ],
  [{ Loafers: 50, Vans: 10, Crocs: 20 }, []],
  [{ Dell: 400, HP: 300, Apple: 1200 }, ["Apple"]]
];

describe("products", () => {
  describe("Return list of products with minimum price of 500 in descending order", () => {
    test.each(data)("products(%p) = %p", (r, result) => {
      let actual = products(r);

      expect(actual).toEqual(result);
    });
  });
});
