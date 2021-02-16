// Problem# 166
// Write a function that returns the sum of elements in an array greater than 5.
// https://edabit.com/challenge/zHutBxQaWvzhzGgxL

const sumFive = (arr) =>
  arr.filter((num) => num > 5).reduce((a, b) => a + b, 0);

module.exports = sumFive;
