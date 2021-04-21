// Problem# 284
// Given a sentence, return the number of words which have the same first and last letter.
// https://edabit.com/challenge/JDDeK9jSFKJbfzhMt

const hasSameEnds = (word) =>
  word.length !== 1 && word[0] === word[word.length - 1];

const countSameEnds = (str) =>
  str
    .split(" ")
    .map((word) => word.toLowerCase())
    .map((word) => word.replace(/[^a-z]/g, ""))
    .filter(hasSameEnds).length;

module.exports = countSameEnds;
