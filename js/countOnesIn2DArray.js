// Create a function to count the number of 1s in a 2D array.
// https://edabit.com/challenge/ve7mQnJsjtFep97fm

const countOnes = (matrix) => matrix.flat().filter((num) => num === 1).length;

module.exports = countOnes;
