// Problem# 149
// Create a function which takes a 2D array arr returns the sum of minimum value in each row.
// https://edabit.com/challenge/5RiZh6yJKeGEo4P3z

const sumMinimums = (arr) =>
  arr.map((item) => Math.min(...item)).reduce((a, b) => a + b, 0);

module.exports = sumMinimums;
