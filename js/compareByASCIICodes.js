// Problem# 255
// Create a function that compares two words based on the sum of their ASCII codes and
// returns the word with the smaller ASCII sum.
// https://edabit.com/challenge/AKocM4opFZBrva2JX

const getASCIISum = (str) =>
  [...str].reduce((acc, curr) => acc + curr.charCodeAt(), 0);

const asciiSort = (arr) =>
  arr.sort((a, b) => getASCIISum(a) - getASCIISum(b))[0];

module.exports = asciiSort;
