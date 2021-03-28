// Problem# 235
// Create a function which adds spaces before every capital in a word. Uncapitalize the whole string afterwards.
// https://edabit.com/challenge/cjgxKpAaxAMHCjqsP

const convertToLowerCaseWithSpace = (letter) =>
  letter === letter.toUpperCase() ? ` ${letter.toLowerCase()}` : letter;

const capSpace = (txt) => [...txt].map(convertToLowerCaseWithSpace).join("");

module.exports = capSpace;
