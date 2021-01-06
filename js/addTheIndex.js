// Given an array of numbers, create a function which returns the same array but with each element's index
// in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...
// https://edabit.com/challenge/izss6QT59oH72uky3

const addIndexes = (arr) => arr.map((num, i) => num + i);

module.exports = addIndexes;
