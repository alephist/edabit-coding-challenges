// Problem# 171
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array
// are identical, and false otherwise. The array will contain 4 elements
// https://edabit.com/challenge/hxyvTffvdT4E238CY

const testJackpot = (outcome) => [...new Set(outcome)].length === 1;

module.exports = testJackpot;
