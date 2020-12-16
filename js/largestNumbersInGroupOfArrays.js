// Create a function that takes an array of arrays with numbers.
// Return a new (single) array with the largest numbers of each.
// https://edabit.com/challenge/h7LTMAFeNz79rXB2Y

const findLargestNums = (arr) => arr.map((item) => Math.max(...item));

module.exports = findLargestNums;
