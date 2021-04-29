// Problem# 300
// Write a function that sorts each string in an array by the letter in alphabetic ascending order (a-z).
// https://edabit.com/challenge/HwC7ryWNW6qvc5cN7

const getLetterASCII = (item) => item.match(/[a-z]/g)[0].charCodeAt();

const sortByLetter = (arr) =>
  arr.sort((a, b) => getLetterASCII(a) - getLetterASCII(b));

module.exports = sortByLetter;
