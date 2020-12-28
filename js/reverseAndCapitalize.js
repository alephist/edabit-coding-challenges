// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.
// https://edabit.com/challenge/nBW6ubsQCurPvhpWc

const reverseCapitalize = (str) => [...str.toUpperCase()].reverse().join("");

module.exports = reverseCapitalize;
