// Problem# 217
// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version.
// If the given string does not contain "a", "b", or "c", return null.
// https://edabit.com/challenge/RftQjZs3srJnRBEH8

const removeABC = (str) => {
  const pattern = /[a-c]/gi;

  return str.match(pattern) ? str.replace(pattern, "") : null;
};

module.exports = removeABC;
