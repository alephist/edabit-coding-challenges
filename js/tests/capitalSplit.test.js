const capSpace = require("../capitalSplit");

const data = [
  ["helloWorld", "hello world"],
  ["iLoveMyTeapot", "i love my teapot"],
  ["stayIndoors", "stay indoors"]
];

describe("capSpace", () => {
  describe("Return text with spaces before capital letters and all words uncapitalized", () => {
    test.each(data)("capSpace(%p) = %p", (txt, result) => {
      let actual = capSpace(txt);

      expect(actual).toEqual(result);
    });
  });
});
