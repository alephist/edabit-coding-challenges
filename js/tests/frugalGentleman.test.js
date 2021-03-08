const chosenWine = require("../frugalGentleman");

const data = [
  [
    [
      { name: "Wine A", price: 8.99 },
      { name: "Wine 32", price: 13.99 },
      { name: "Wine 9", price: 10.99 }
    ],
    "Wine 9"
  ],
  [
    [
      { name: "Wine A", price: 8.99 },
      { name: "Wine B", price: 9.99 }
    ],
    "Wine A"
  ],
  [[{ name: "Wine A", price: 8.99 }], "Wine A"],
  [[], null],
  [
    [
      { name: "Wine A", price: 8.99 },
      { name: "Wine 389", price: 109.99 },
      { name: "Wine 44", price: 38.44 },
      { name: "Wine 72", price: 22.77 }
    ],
    "Wine 44"
  ]
];

describe("chosenWine", () => {
  describe("Return the name of second cheapest wine", () => {
    test.each(data)("chosenWine(%o) = %p", (wines, result) => {
      let actual = chosenWine(wines);

      expect(actual).toEqual(result);
    });
  });
});
