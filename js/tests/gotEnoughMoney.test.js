const itemsPurchased = require("../gotEnoughMoney");

const data = [
  [
    { Water: "$1", Bread: "$3", TV: "$1,000", Fertilizer: "$20" },
    "$300",
    ["Bread", "Fertilizer", "Water"]
  ],
  [
    {
      Apple: "$4",
      Honey: "$3",
      Fan: "$14",
      Bananas: "$4",
      Pan: "$100",
      Spoon: "$2"
    },
    "$100",
    ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]
  ],
  [
    { Phone: "$999", Speakers: "$300", Laptop: "$5,000", PC: "$1200" },
    "$1",
    "Nothing"
  ]
];

describe("itemsPurchased", () => {
  describe("Return list of items in alphabetical order", () => {
    test.each(data)("itemsPurchased(%o, %p) = %p", (store, wallet, result) => {
      let actual = itemsPurchased(store, wallet);

      expect(actual).toEqual(result);
    });
  });
});
