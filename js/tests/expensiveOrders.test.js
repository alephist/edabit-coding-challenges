const expensiveOrders = require("../expensiveOrders");

const data = [
  [{ a: 3000, b: 200, c: 1050 }, 1000, { a: 3000, c: 1050 }],
  [
    {
      "Gucci Fur": 24600,
      "Teak Dining Table": 3200,
      "Louis Vutton Bag": 5550,
      "Dolce Gabana Heels": 4000
    },
    20000,
    { "Gucci Fur": 24600 }
  ],
  [{ "Deluxe Burger": 35, "Icecream Shake": 4, Fries: 5 }, 40, {}],
  [
    { "Kyoto Ticket": 10, "Museum Exhibit": 30, Kimono: 3000 },
    5,
    { "Kyoto Ticket": 10, "Museum Exhibit": 30, Kimono: 3000 }
  ],
  [
    {
      "Travis Scott burger": 6,
      "Bowl of Beans": 3,
      "Hand cuffs": 60,
      "RF Device": 150
    },
    42,
    { "Hand cuffs": 60, "RF Device": 150 }
  ]
];

describe("expensiveOrders", () => {
  describe("Return orders that are greater than the cost", () => {
    test.each(data)("expensiveOrders(%o, %i) = %o", (orders, cost, result) => {
      let actual = expensiveOrders(orders, cost);

      expect(actual).toEqual(result);
    });
  });
});
