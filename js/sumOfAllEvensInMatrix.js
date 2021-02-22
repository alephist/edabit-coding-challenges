// Problem# 175
// Create a function that returns the sum of all even elements in a 2D matrix.
// https://edabit.com/challenge/yiMSg6cNNCeJDQo3b

const sumOfEvens = (arr) =>
  arr
    .flat()
    .filter((num) => num % 2 === 0)
    .reduce((a, b) => a + b, 0);

module.exports = sumOfEvens;
