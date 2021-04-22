const lastNameLensort = require("../sortNamesByLastName");

const data = [
  [
    [
      "Jennifer Figueroa",
      "Heather Mcgee",
      "Amanda Schwartz",
      "Nicole Yoder",
      "Melissa Hoffman"
    ],
    [
      "Heather Mcgee",
      "Nicole Yoder",
      "Melissa Hoffman",
      "Jennifer Figueroa",
      "Amanda Schwartz"
    ]
  ],
  [
    [
      "Hitagi Senjougahara",
      "Edward Elric",
      "Light Yagami",
      "Rintaro Okabe",
      "Kurisu Makise"
    ],
    [
      "Edward Elric",
      "Rintaro Okabe",
      "Kurisu Makise",
      "Light Yagami",
      "Hitagi Senjougahara"
    ]
  ]
];

describe("lastNameLensort", () => {
  describe("Return array of names sorted by length of last name", () => {
    test.each(data)("lastNameLensort(%p) = %p", (names, result) => {
      let actual = lastNameLensort(names);

      expect(actual).toEqual(result);
    });
  });
});
