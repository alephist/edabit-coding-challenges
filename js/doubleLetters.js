// Problem# 263
// Create a function that takes a word and returns true if the word has two consecutive identical letters.
// https://edabit.com/challenge/YHLaB8itA9tEDN5TG

const doubleLetters = (word) => new RegExp(/([a-z])\1/, "g").test(word);

module.exports = doubleLetters;
