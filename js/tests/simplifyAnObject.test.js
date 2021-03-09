const simplifyList = require("../simplifyAnObject");

const data = [
  [
    [
      { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
      { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
      { brand: "Urban Decay", name: "Naked Honey Pallete" },
      { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
      { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
      { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
    ],
    [
      { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
      { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
      { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
    ]
  ],
  [
    [{ brand: "NYX", name: "Soft Matte Lip Cream" }],
    [{ brand: "NYX", name: "Soft Matte Lip Cream", count: 1 }]
  ],
  [
    [
      { brand: "e.l.f", name: "Flawless Finish Foundation" },
      { brand: "e.l.f", name: "Flawless Finish Foundation" },
      { brand: "e.l.f", name: "Flawless Finish Foundation" },
      { brand: "e.l.f", name: "Flawless Finish Foundation" },
      { brand: "Giorgio Armani", name: "Luminous Silk Foundation" },
      { brand: "Giorgio Armani", name: "Luminous Silk Foundation" },
      { brand: "Marc Jacobs", name: "Beauty O!" },
      { brand: "Hourglass", name: "Ambient Lighting Bronzer" },
      { brand: "Hourglass", name: "Ambient Lighting Bronzer" },
      { brand: "Hourglass", name: "Ambient Lighting Bronzer" },
      { brand: "EltaMD", name: "Foaming Facial Cleanser" }
    ],
    [
      { brand: "e.l.f", name: "Flawless Finish Foundation", count: 4 },
      { brand: "Giorgio Armani", name: "Luminous Silk Foundation", count: 2 },
      { brand: "Marc Jacobs", name: "Beauty O!", count: 1 },
      { brand: "Hourglass", name: "Ambient Lighting Bronzer", count: 3 },
      { brand: "EltaMD", name: "Foaming Facial Cleanser", count: 1 }
    ]
  ]
];

describe("simplifyObject", () => {
  describe("Return list with combined duplicate items and count property to each items", () => {
    test.each(data)("simplifyObject(%o) = %o", (list, result) => {
      let actual = simplifyList(list);

      expect(actual).toEqual(result);
    });
  });
});
