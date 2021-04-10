const dnaToRna = require("../transcribeToMRNA");

const data = [
  ["GCGTAC", "CGCAUG"],
  ["ATTAGCGCGATATACGCGTAC", "UAAUCGCGCUAUAUGCGCAUG"],
  ["CAGTATGCTGCAT", "GUCAUACGACGUA"],
  ["CGATATA", "GCUAUAU"],
  ["GCAGCTACA", "CGUCGAUGU"]
];

describe("dnaToRna", () => {
  describe("Return mRNA from input DNA", () => {
    test.each(data)("dnaToRna(%p) = %p", (dna, result) => {
      let actual = dnaToRna(dna);

      expect(actual).toEqual(result);
    });
  });
});
