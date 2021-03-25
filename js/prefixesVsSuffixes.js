// Problem# 229
// Create two functions: isPrefix(word, prefix-) and isSuffix(word, -suffix).
// isPrefix should return true if it begins with the prefix argument.
// isSuffix should return true if it ends with the suffix argument.
// Otherwise return false.
// https://edabit.com/challenge/pBp7v6zkQvNa9jByh

const removeDash = (str) => str.replace("-", "");

const isPrefix = (word, prefix) => word.startsWith(removeDash(prefix));

const isSuffix = (word, suffix) => word.endsWith(removeDash(suffix));

module.exports = {
  isPrefix,
  isSuffix
};
