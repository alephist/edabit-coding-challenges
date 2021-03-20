// Problem# 219
// Check if a string title is a title string or not.
// A title string is one which has all the words in the string start with a upper case letter.
// https://edabit.com/challenge/6q9iTtQdnZZM5Cbai

const checkTitle = (title) =>
  title
    .split(" ")
    .map((word) => [...word][0])
    .every((letter) => letter === letter.toUpperCase());

module.exports = checkTitle;
