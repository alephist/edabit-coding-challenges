// Problem# 194
// Write a function that inverts the keys and values of an object.
// https://edabit.com/challenge/YTECpnCCeJsYqYvfF

const invert = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));

module.exports = invert;
