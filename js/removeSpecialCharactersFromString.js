// Problem# 241
// Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, ))
// and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
// https://edabit.com/challenge/k7CwrsKPHrEL8h4z6

const removeSpecialCharacters = (str) => str.replace(/[^\w\s\-]/g, "");

module.exports = removeSpecialCharacters;
