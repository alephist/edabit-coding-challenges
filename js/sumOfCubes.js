// Create a function that takes in an array of numbers and returns the sum of its cubes.
// https://edabit.com/challenge/XdAR3KohR5w7rjrFg

const getSum = (arr) =>
  arr.map((num) => Math.pow(num, 3)).reduce((acc, curr) => acc + curr, 0);

module.exports = getSum;
