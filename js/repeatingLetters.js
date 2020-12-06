// Create a function that takes a string and returns a string in which each character is repeated once.
// https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

const doubleChar = (str) =>
  str
    .split("")
    .map((letter) => letter.repeat(2))
    .join("");

module.exports = doubleChar;
