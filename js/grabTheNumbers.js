// Problem# 247
// Given a string including a bunch of characters and numbers, return the sum of all the numbers in the string.
// Note that multiple digits next to each other are counted as a whole number rather than separate digits.
// https://edabit.com/challenge/8E2BQmb5GZ8G4mkgM

const grabNumberSum = (str) =>
  str.match(/\d+/g).reduce((acc, curr) => acc + Number(curr), 0);

module.exports = grabNumberSum;
