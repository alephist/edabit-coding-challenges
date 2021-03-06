const formatMath = require("../neatlyFormattedMath");

const data = [
  ["3 + 4", "3 + 4 = 7"],
  ["3 - 2", "3 - 2 = 1"],
  ["4 x 5", "4 x 5 = 20"],
  ["6 / 3", "6 / 3 = 2"],
  ["9 / 3", "9 / 3 = 3"],
  ["21 / 3", "21 / 3 = 7"],
  ["24 / 3", "24 / 3 = 8"],
  ["80 / 8", "80 / 8 = 10"],
  ["60 / 30", "60 / 30 = 2"],
  ["44 - 11", "44 - 11 = 33"],
  ["48 + 35", "48 + 35 = 83"],
  ["8 + 5", "8 + 5 = 13"],
  ["46 - 11", "46 - 11 = 35"],
  ["23 x 46", "23 x 46 = 1058"],
  ["11 + 1", "11 + 1 = 12"],
  ["29 - 21", "29 - 21 = 8"],
  ["24 x 26", "24 x 26 = 624"],
  ["47 + 8", "47 + 8 = 55"],
  ["42 - 48", "42 - 48 = -6"],
  ["33 x 44", "33 x 44 = 1452"],
  ["26 + 3", "26 + 3 = 29"],
  ["32 + 17", "32 + 17 = 49"],
  ["3 x 26", "3 x 26 = 78"],
  ["12 x 25", "12 x 25 = 300"],
  ["43 + 31", "43 + 31 = 74"],
  ["28 + 27", "28 + 27 = 55"],
  ["24 - 11", "24 - 11 = 13"],
  ["20 x 50", "20 x 50 = 1000"],
  ["36 - 30", "36 - 30 = 6"],
  ["34 x 48", "34 x 48 = 1632"],
  ["26 + 8", "26 + 8 = 34"],
  ["25 - 44", "25 - 44 = -19"],
  ["24 x 25", "24 x 25 = 600"],
  ["40 x 17", "40 x 17 = 680"],
  ["44 - 7", "44 - 7 = 37"],
  ["37 x 41", "37 x 41 = 1517"],
  ["15 - 1", "15 - 1 = 14"],
  ["16 x 4", "16 x 4 = 64"],
  ["13 x 43", "13 x 43 = 559"],
  ["7 x 11", "7 x 11 = 77"],
  ["12 - 25", "12 - 25 = -13"],
  ["37 + 6", "37 + 6 = 43"],
  ["32 x 46", "32 x 46 = 1472"],
  ["31 x 5", "31 x 5 = 155"],
  ["17 - 37", "17 - 37 = -20"],
  ["31 + 36", "31 + 36 = 67"],
  ["17 x 34", "17 x 34 = 578"],
  ["24 - 3", "24 - 3 = 21"],
  ["48 + 33", "48 + 33 = 81"],
  ["19 + 1", "19 + 1 = 20"],
  ["45 + 1", "45 + 1 = 46"],
  ["34 + 24", "34 + 24 = 58"],
  ["32 + 41", "32 + 41 = 73"],
  ["1 - 21", "1 - 21 = -20"],
  ["40 x 8", "40 x 8 = 320"],
  ["4 - 16", "4 - 16 = -12"],
  ["30 - 43", "30 - 43 = -13"],
  ["26 + 49", "26 + 49 = 75"],
  ["24 x 38", "24 x 38 = 912"]
];

describe("formatMath", () => {
  describe("Return math expression with answer", () => {
    test.each(data)("formatMath(%p) = %p", (expr, result) => {
      let actual = formatMath(expr);

      expect(actual).toEqual(result);
    });
  });
});
