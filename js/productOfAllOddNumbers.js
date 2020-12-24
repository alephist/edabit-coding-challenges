// Create a function that returns the product of all odd integers in an array.
// https://edabit.com/challenge/4LnwAC3kgTctc7r3k

const oddProduct = (arr) =>
  arr.filter((num) => num % 2 !== 0).reduce((acc, curr) => acc * curr);

module.exports = oddProduct;
