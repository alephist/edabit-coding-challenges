// Problem# 206
// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with only identical elements.
// https://edabit.com/challenge/TWwNf9xxyvWGjEn3n

const countIdentical = (arr) =>
  arr
    .map((subArray) => [...new Set(subArray)])
    .filter((item) => item.length === 1).length;

module.exports = countIdentical;
