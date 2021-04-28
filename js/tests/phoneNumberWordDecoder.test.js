const textToNum = require("../phoneNumberWordDecoder");

const data = [
  ["123-647-EYES", "123-647-3937"],
  ["(325444-TEST", "(325444-8378"],
  ["653-TRY-THIS", "653-879-8447"],
  ["435-224-7613", "435-224-7613"],
  ["(33D)ONT-FAIL", "(333)668-3245"],
  ["(025)445-6741", "(025)445-6741"]
];

describe("textToNum", () => {
  describe("Return phone number with only numbers", () => {
    test.each(data)("textToNum(%p) = %p", (phone, result) => {
      let actual = textToNum(phone);

      expect(actual).toEqual(result);
    });
  });
});
