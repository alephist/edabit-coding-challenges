// Problem# 165
// Create a function that takes an array of numbers arr and returns an inverted array.
// https://edabit.com/challenge/5L368ypvh5ZZ2HJSL

const invertArray = (arr) => arr.map((num) => (num === 0 ? 0 : num * -1));

module.exports = invertArray;
