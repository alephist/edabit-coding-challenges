// Create a function that takes two strings as arguments
// and returns the number of times the first string (the single character) is found in the second string.
// https://edabit.com/challenge/kbFhwaDyrd79JrgeB

const charCount = (myChar, str) =>
  [...str].filter((ltr) => ltr === myChar).length;

module.exports = charCount;
