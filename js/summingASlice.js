// Given an array and an integer n, return the sum of the first n numbers in the array.
// https://edabit.com/challenge/B3FR3P7g8NyTg7t8b

const sliceSum = (arr, n) =>
  n > arr.length
    ? arr.reduce((a, b) => a + b, 0)
    : arr.slice(0, n).reduce((a, b) => a + b, 0);

module.exports = sliceSum;
