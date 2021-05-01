// Problem# 304
// A word is alphabetically sorted if all of the letters in it are in consecutive alphabetical order.
// Some examples of alphabetically sorted words: abhors (a is before b, b is before h, h is before o, etc.), ghost, accent, hoop.
// Create a function that takes in a sentence as input and returns true if there is at least one alphabetically sorted word inside that has a minimum length of 3.
// https://edabit.com/challenge/od9GF2tQKyLAvre8Z

const lettersAreSorted = (word) => [...word].sort().join("") === word;

const wordHasMinLengthOfThree = (word) => word.length >= 3;

const isAlphabeticallySorted = (sentence) =>
  sentence
    .toLowerCase()
    .replace(/[.,]/g, "")
    .split(" ")
    .filter(wordHasMinLengthOfThree)
    .some(lettersAreSorted);

module.exports = isAlphabeticallySorted;
