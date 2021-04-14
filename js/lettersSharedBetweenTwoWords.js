// Problem# 270
// Create a function that returns the number of characters shared between two words.
// https://edabit.com/challenge/esP7cxXgx8ygiTq9f

const sharedLetters = (str1, str2) =>
  [...new Set(str1)].reduce((acc, curr) => {
    if ([...new Set(str2)].includes(curr)) acc++;

    return acc;
  }, 0);

module.exports = sharedLetters;
