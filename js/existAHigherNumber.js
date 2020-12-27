// Write a function that returns true if there exists at least one number that is larger than or equal to n.
// https://edabit.com/challenge/77zq4RhMgWup22H6d

const existHigher = (arr, n) => arr.some((item) => item >= n);

module.exports = existHigher;
