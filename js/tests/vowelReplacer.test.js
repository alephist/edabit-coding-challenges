const replaceVowels = require("../vowelReplacer");

const data = [
  ["the aardletk", "#", "th# ##rdv#rk"],
  ["minnie mouse", "?", "m?nn?? m??s?"],
  ["shakespeare", "*", "sh*k*sp**r*"],
  ["all is fair in love and war", "<", "<ll <s f<<r <n l<v< <nd w<r"]
];

describe("replaceVowels", () => {
  describe("Replace all vowels in string with a specified character", () => {
    test.each(data)("replaceVowels(%p, %p) = %p", (str, ch, result) => {
      let actual = replaceVowels(str, ch);

      expect(actual).toEqual(result);
    });
  });
});
