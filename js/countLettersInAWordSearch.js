// Create a function that counts the number of times a particular letter shows up in the word search.
// https://edabit.com/challenge/6QNPoEjY8DLGKPiqr

const letterCounter = (arr, letter) =>
  arr.flat().filter((ltr) => ltr === letter).length;

module.exports = letterCounter;
