// Problem# 262
// Create a function that takes a strings characters as ASCII and returns each characters hexadecimal value as a string.
// https://edabit.com/challenge/jBf8Nq259tBEgsz4X

const toHex = (str) =>
  [...str].map((c) => c.charCodeAt().toString(16)).join(" ");

module.exports = toHex;
