const grabCity = require("../grabTheCity");

const data = [
  ["[Last Day!] Beer Festival [Munich]", "Munich"],
  ["Cheese Factory Tour [Portland]", "Portland"],
  [
    "[Duration: 7 hours] Tour of the Maritimes [Prince Edward Island]",
    "Prince Edward Island"
  ],
  ["[5 Stars] Traditional Gondola Experience [Venice]", "Venice"],
  [
    "[Last Minute Deal][$1039] Machu Picchu 3 Day Trip [Machu Picchu]",
    "Machu Picchu"
  ],
  ["[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]", "Kyoto"]
];

describe("grabCity", () => {
  describe("Return name of city from input string", () => {
    test.each(data)("grabCity(%p) = %p", (str, result) => {
      let actual = grabCity(str);

      expect(actual).toEqual(result);
    });
  });
});
