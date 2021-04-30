// Problem# 302
// Given a string, reverse its order, change lowercase letters to uppercase and increment uppercase letters by one
// (e.g. A becomes B, C becomes D, Z becomes A)
// https://edabit.com/challenge/xjgWvHzofoufpKxjF

const incrementLetterIfUppercase = (letter) => {
  if (letter === letter.toUpperCase()) {
    if (letter === "Z") return "A";

    return String.fromCharCode(letter.charCodeAt() + 1);
  }

  return letter.toUpperCase();
};

const changeString = (str) =>
  [...str].reverse().map(incrementLetterIfUppercase).join("");

module.exports = changeString;
