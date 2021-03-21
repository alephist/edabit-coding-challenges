// Problem# 221
// Write a function that takes a string as an argument and returns the left most digit in the string.
// https://edabit.com/challenge/tPvx6pgPmerPrwqM8

const leftDigit = (str) => Number(str.match(/[0-9]/)[0]);

module.exports = leftDigit;
