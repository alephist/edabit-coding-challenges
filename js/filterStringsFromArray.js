// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
// https://edabit.com/challenge/b2NdDSdkjqFnCTfS8

const filterArray = (arr) => arr.filter((item) => typeof item === "number");

module.exports = filterArray;
