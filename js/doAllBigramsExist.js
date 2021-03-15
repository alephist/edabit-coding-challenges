// Problem# 212
// You are given an input array of bigrams, and an array of words.
// Write a function that returns true if every single bigram from this array can be found at least once in an array of words.
// https://edabit.com/challenge/wQGGp6Qce6phDCvW9

const canFind = (bigrams, words) =>
  bigrams.every((bigram) => words.some((word) => word.includes(bigram)));

module.exports = canFind;
