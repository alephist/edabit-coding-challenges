const dakti = require("../dakti");

const data = [
  [
    "en5tere y2a bab1y y3o 4me s6e not7a cuand8o 9me-ves",
    "baby ya yo me entere se nota cuando me-ves"
  ],
  [
    "h4as don2de ah1i n3o ll5egado q7ue 8yo te9-llevare s6abes",
    "ahi donde no has llegado sabes que yo te-llevare"
  ],
  [
    "quie3res bebe4r dime1 e5s qu6e qu2e tu7 er8es m9i-bebe",
    "dime que quieres beber es que tu eres mi-bebe"
  ],
  [
    "y1 de2 nos3tros qu4ien v5a a6 h7ablar 8si 9no",
    "y de nostros quien va a hablar si no"
  ],
  ["no1 n2os v4er de3jamos", "no nos dejamos ver"]
];

describe("dakti", () => {
  describe("Return song lyric with sorted words by number provided", () => {
    test.each(data)("dakti(%p) = %p", (str, result) => {
      let actual = dakti(str);

      expect(actual).toEqual(result);
    });
  });
});
