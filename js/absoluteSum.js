// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.
// https://edabit.com/challenge/rCmEy2AQYLbRGgKyL

const getAbsoluteSum = (arr) =>
  arr.map((num) => Math.abs(num)).reduce((acc, curr) => acc + curr, 0);

module.exports = getAbsoluteSum;
