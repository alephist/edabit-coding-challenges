// Create a function that returns an array of strings sorted by length in ascending order.
// https://edabit.com/challenge/aNZzLBxQpidWBF26X

const sortByLength = (arr) => arr.sort((a, b) => a.length - b.length);

module.exports = sortByLength;
