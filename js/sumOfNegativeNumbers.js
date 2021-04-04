// Problem# 250
// Create a function that takes a string containing integers as well as other characters and
// return the sum of the negative integers only.
// https://edabit.com/challenge/ttD7mWf329nxxS3wf

const negativeSum = (chars) =>
  chars.match(/-\d+/g).reduce((acc, curr) => acc + Number(curr), 0);

module.exports = negativeSum;
