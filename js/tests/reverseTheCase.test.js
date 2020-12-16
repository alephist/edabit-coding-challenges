const reverseCase = require("../reverseTheCase");

const data = [
  ["Happy Birthday", "hAPPY bIRTHDAY"],
  ["MANY THANKS", "many thanks"],
  ["sPoNtAnEoUs", "SpOnTaNeOuS"],
  ["eXCELLENT, yOuR mAJESTY", "Excellent, YoUr Majesty"]
];

describe("reverseCase", () => {
  describe("Return string with characters in reverse case", () => {
    test.each(data)("reverseCase(%p) = %p", (str, result) => {
      let actual = reverseCase(str);

      expect(actual).toEqual(result);
    });
  });
});
