// Problem# 238
// Write a function that retrieves all words that begin with a vowel.
// https://edabit.com/challenge/KZwvC92KweCGiwiXF

const retrieve = (str) => {
  if (!str.length) return [];

  return str
    .split(" ")
    .filter((item) => item[0].match(/[aeiou]/i))
    .map((item) => item.replace(/[^a-z]/gi, ""))
    .map((item) => item.toLowerCase());
};

module.exports = retrieve;
