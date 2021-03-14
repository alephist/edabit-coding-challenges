// Problem# 209
// Write a function that returns the longest sequence of consecutive zeroes in a binary string.
// https://edabit.com/challenge/5zwzw2AFC95u3ZLtm

const longestZero = (s) => s.split("1").sort((a, b) => b.length - a.length)[0];

module.exports = longestZero;
