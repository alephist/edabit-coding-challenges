const doubleChar = require("../repeatingLetters");

const data = [
  ["String", "SSttrriinngg"],
  ["Hello World!", "HHeelllloo  WWoorrlldd!!"],
  ["1234!_ ", "11223344!!__  "],
  ["##^&%%*&%%$#@@!", "####^^&&%%%%**&&%%%%$$##@@@@!!"],
  ["scandal", "ssccaannddaall"],
  ["economics", "eeccoonnoommiiccss"],
  [" ", "  "],
  ["_______", "______________"],
  ["equip gallon read", "eeqquuiipp  ggaalllloonn  rreeaadd"],
  ["baby increase", "bbaabbyy  iinnccrreeaassee"]
];

describe("doubleChar", () => {
  describe("Return string with characters reapeated once", () => {
    test.each(data)("doubleChar(%p) = %p", (str, result) => {
      var actual = doubleChar(str);

      expect(actual).toEqual(result);
    });
  });
});
