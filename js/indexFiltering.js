// Problem# 273
// Create a function that takes two inputs: idx (an array of integers) and str (a string).
// The function should return another string with the letters of str at each index in idx in order.
// https://edabit.com/challenge/q5N9n3ZjKq5Fn2hzg

const indexFilter = (idx, str) =>
  idx.map((i) => str.toLowerCase().substr(i, 1)).join("");

module.exports = indexFilter;
