// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
// https://edabit.com/challenge/Wg3pBiH8HQggcfaTg

const maxTotal = (nums) =>
  nums
    .sort((a, b) => b - a)
    .slice(0, 5)
    .reduce((a, b) => a + b, 0);

module.exports = maxTotal;
