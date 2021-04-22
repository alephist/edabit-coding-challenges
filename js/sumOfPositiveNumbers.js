// Problem# 286
// Create a function that takes a string containing integers as well as other characters and
// return the sum of the positive integers only.
// https://edabit.com/challenge/xjv7kk6Q7tDhyZTtZ

const positiveSum = (str) =>
  str.match(/[-\d]+/g).reduce((acc, curr) => {
    if (Number(curr) > 0) acc += Number(curr);

    return acc;
  }, 0);

module.exports = positiveSum;
