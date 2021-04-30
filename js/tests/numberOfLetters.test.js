const charCount = require("../numberOfLetters");

const data = [
  ["Hello world!", "d:1 e:1 h:1 l:3 o:2 r:1 w:1"],
  [
    "Now, I learn JavaScript",
    "a:3 c:1 e:1 i:2 j:1 l:1 n:2 o:1 p:1 r:2 s:1 t:1 v:1 w:1"
  ],
  ["Cheers, love! Hahaha.", "a:3 c:1 e:3 h:4 l:1 o:1 r:1 s:1 v:1"],
  [
    "Guess I won’t be using that.",
    "a:1 b:1 e:2 g:2 h:1 i:2 n:2 o:1 s:3 t:3 u:2 w:1"
  ],
  [
    "Ando en buena racha. ¡Fuera de mi camino!",
    "a:6 b:1 c:2 d:2 e:4 f:1 h:1 i:2 m:2 n:4 o:2 r:2 u:2"
  ],
  [
    "I’m on fire! Touch me, and you’ll get burned.",
    "a:1 b:1 c:1 d:2 e:4 f:1 g:1 h:1 i:2 l:2 m:2 n:3 o:3 r:2 t:2 u:3 y:1"
  ]
];

describe("charCount", () => {
  describe("Return number of letter in the sentence sorted alphabetically", () => {
    test.each(data)("charCount(%p) = %p", (sentence, result) => {
      let actual = charCount(sentence);

      expect(actual).toEqual(result);
    });
  });
});
