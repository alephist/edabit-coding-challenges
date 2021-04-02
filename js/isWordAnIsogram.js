// Problem# 245
// An isogram is a word that has no duplicate letters.
// Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".
// https://edabit.com/challenge/rJPgai5r5XdXeQmLg

const isIsogram = (str) =>
  str.toLowerCase().length === new Set(str.toLowerCase()).size;

module.exports = isIsogram;
