const changeString = require("../changeTheWord");

const data = [
  ["ApPle", "ELQPB"],
  ["draGON", "OPHARD"],
  ["ZebrA", "BRBEA"],
  ["sNaKe", "ELAOS"],
  ["MElon", "NOLFN"]
];

describe("changeString", () => {
  describe("Return reversed new string in which the lowercase letters are capitalized and uppercase letters are incremented", () => {
    test.each(data)("changeString(%p) = %p", (str, result) => {
      let actual = changeString(str);

      expect(actual).toEqual(result);
    });
  });
});
