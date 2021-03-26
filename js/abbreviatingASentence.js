// Problem# 232
// Create a function which takes a sentence and returns its abbreviation. Get all of the words over or equal
// to n characters in length and return the first letter of each, capitalised and overall returned as a single string.
// https://edabit.com/challenge/ktqDpdPrFApaQpcCi

const abbreviate = (sentence, n = 4) =>
  sentence
    .split(" ")
    .filter((word) => word.length >= n)
    .map((word) => word[0].toUpperCase())
    .join("");

module.exports = abbreviate;
