// Problem# 248
// Check if the given string consists of only letters and spaces and if every letter is in lower case.
// https://edabit.com/challenge/6nWnXZZBdetZSLbTE

const areLettersOnly = (str) =>
  str ? [...str].every((letter) => letter.match(/[a-z\s]/g)) : false;

module.exports = areLettersOnly;
