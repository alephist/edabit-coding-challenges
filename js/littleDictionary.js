// Create a function that takes an initial word and extracts any words that start with the same
// letters as the initial word.
// https://edabit.com/challenge/p5xNwq2v9ZX7vo3mb

const dictionary = (initial, words) =>
  words.filter((word) => word.startsWith(initial));

module.exports = dictionary;
