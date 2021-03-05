const mostExpensive = require("../mostExpensiveJewelry");

const data = [
  [
    { "Diamond Earrings": 980, "Gold Watch": 250, "Pearl Necklace": 4650 },
    "The most expensive one is the Pearl Necklace"
  ],
  [
    { "Silver Bracelet": 280, "Gemstone Earrings": 180, "Diamond Ring": 3500 },
    "The most expensive one is the Diamond Ring"
  ],
  [
    { "Simple Gold Ring": 310, "Silver Anklet": 110, "Crystal Bracelet": 190 },
    "The most expensive one is the Simple Gold Ring"
  ]
];

describe("mostExpensive", () => {
  describe("Return the name of the jewelry with the highest price", () => {
    test.each(data)("mostExpensive(%p) = %p", (obj, result) => {
      let actual = mostExpensive(obj);

      expect(actual).toEqual(result);
    });
  });
});
