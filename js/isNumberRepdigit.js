// Problem# 159
// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and
// returns whether it's a repdigit or not.
// https://edabit.com/challenge/8vSpPNjNx6JBcvxdc

const isRepdigit = (num) =>
  num < 0 ? false : [...new Set(num.toString())].length === 1;

module.exports = isRepdigit;
