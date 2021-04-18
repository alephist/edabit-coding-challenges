// Problem# 278
// Create a function that takes a string of words and return a string sorted alphabetically by the
// last character of each word.
// https://edabit.com/challenge/ZeNq6QYyDMk8bKsaJ

const getLastLetterASCII = (word) => word[word.length - 1].charCodeAt();

const sortByLast = (str) =>
  str
    .split(" ")
    .sort((a, b) => getLastLetterASCII(a) - getLastLetterASCII(b))
    .join(" ");

module.exports = sortByLast;
