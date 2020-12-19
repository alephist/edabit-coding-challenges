// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
// https://edabit.com/challenge/GNgCfKHWfQwByBNqa

const sumTwoSmallestNums = (arr) =>
  arr
    .filter((num) => num > 0)
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b, 0);

module.exports = sumTwoSmallestNums;
