// Create a function that takes an array as an argument and returns true or false
// depending on whether the average of all elements in the array is a whole number or not.
// https://edabit.com/challenge/arzsQcGsstJxHAnGi

const isAvgWhole = (arr) =>
  arr.reduce((acc, curr) => acc + curr, 0) % arr.length === 0;

module.exports = isAvgWhole;
