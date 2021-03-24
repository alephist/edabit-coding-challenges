// Problem# 227
// Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).
// https://edabit.com/challenge/QQxJqZnfFN6mPcBCr

const dashed = (str) =>
  [...str]
    .map((letter) => (letter.match(/[AEIOU]/i) ? `-${letter}-` : letter))
    .join("");

module.exports = dashed;
