// Problem# 267
// Create a function that takes a string and replaces each letter with its appropriate position in the alphabet.
// "a" is 1, "b" is 2, "c" is 3, etc, etc.
// https://edabit.com/challenge/LzqbjjEnBkbFYbmDz

const alphabetIndex = (str) =>
  str
    .replace(/[^a-z]/gi, "")
    .toLowerCase()
    .split("")
    .map((c) => c.charCodeAt() - 96)
    .join(" ");

module.exports = alphabetIndex;
