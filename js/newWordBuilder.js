// Problem# 192
// Create a function that builds a word from the scrambled letters contained in the first array.
// Use the second array to establish each position of the letters in the first array.
// Return a string from the unscrambled letters (that made-up the word).
// https://edabit.com/challenge/nhcFHFHDYGwyAFNSy

const wordBuilder = (letters, positions) =>
  positions.map((position) => letters[position]).join("");

module.exports = wordBuilder;
