// Return the sum of all items in an array, where each item is multiplied by its index (zero-based).
// For empty arrays, return 0.
// https://edabit.com/challenge/3Efavz8YmSBia4p8s

const multiplyIndex = (arr) =>
  arr.map((num, i) => num * i).reduce((a, b) => a + b, 0);

module.exports = multiplyIndex;
