// Problem# 215
// Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.
// https://edabit.com/challenge/djNxjykvXvKuHvGPZ

const convertToBinary = (str) =>
  str.replace(/[a-m]/gi, "0").replace(/[n-z]/gi, "1");

module.exports = convertToBinary;
