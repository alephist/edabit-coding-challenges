// Problem# 223
// Create a function that takes a word and extends all vowels by a number num.
// https://edabit.com/challenge/P4zxwFNwZPGeiDwKy

const extendVowels = (word, num) => {
  if (!Number.isInteger(num) || num < 0) return "invalid";
  else if (num === 0) return word;

  return [...word]
    .map((letter) => {
      switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
          return letter.repeat(num + 1);

        default:
          return letter;
      }
    })
    .join("");
};

module.exports = extendVowels;
