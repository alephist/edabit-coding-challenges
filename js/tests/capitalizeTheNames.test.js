const capMe = require("../capitalizeTheNames");

const data = [
  [
    ["mavis", "senaida", "letty"],
    ["Mavis", "Senaida", "Letty"]
  ],
  [
    ["samuel", "MABELLE", "letitia", "meridith"],
    ["Samuel", "Mabelle", "Letitia", "Meridith"]
  ],
  [
    ["Slyvia", "Kristal", "Sharilyn", "Calista"],
    ["Slyvia", "Kristal", "Sharilyn", "Calista"]
  ],
  [
    ["krisTopher", "olIva", "herminiA"],
    ["Kristopher", "Oliva", "Herminia"]
  ],
  [
    ["luke", "marsha", "stanford"],
    ["Luke", "Marsha", "Stanford"]
  ],
  [["kara"], ["Kara"]],
  [
    ["mARIANN", "jOI", "gEORGEANN"],
    ["Mariann", "Joi", "Georgeann"]
  ]
];

describe("capMe", () => {
  describe("Return names with only first letter capitalized", () => {
    test.each(data)("capMe(%p) = %p", (arr, result) => {
      let actual = capMe(arr);

      expect(actual).toEqual(result);
    });
  });
});
