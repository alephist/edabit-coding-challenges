// Problem# 211
// Create a function that returns only strings with unique characters.
// https://edabit.com/challenge/kPjg5tCKnFsyYFfex

const filterUnique = (arr) =>
  arr.filter((item) => new Set(item).size === item.length);

module.exports = filterUnique;
