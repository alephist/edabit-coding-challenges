// Problem# 265
// Given a string of numbers separated by a comma and space, return the product of the numbers.
// https://edabit.com/challenge/TzxoYExuxuQw2ahWR

const multiplyNums = (nums) =>
  nums
    .split(", ")
    .map(Number)
    .reduce((acc, curr) => {
      acc *= curr;

      if (acc === -0) acc = 0;

      return acc;
    });

module.exports = multiplyNums;
