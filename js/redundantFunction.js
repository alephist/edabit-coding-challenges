// Problem# 158
// Write a function redundant that takes in a string str and returns a function that returns str.
// https://edabit.com/challenge/hzxN9bAebBPNqdQto

const redundant = (str) => () => str;

module.exports = redundant;
