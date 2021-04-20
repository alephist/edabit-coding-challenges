// Problem# 281
// Create a function that takes a string of words (or just one word) and converts each word from camelCase to snake_case.
// https://edabit.com/challenge/NekgMswiPasDonSDe

const isNumber = (item) => new RegExp(/[0-9]/).test(item);

const isLetter = (item) => new RegExp(/[a-z]/i).test(item);

const isUpperCase = (letter) => letter === letter.toUpperCase();

const convertToLowerCaseAddUnderscore = (letter) =>
  isUpperCase(letter) && isLetter(letter) && !isNumber(letter)
    ? `_${letter.toLowerCase()}`
    : letter;

const camelToSnake = (str) =>
  [...str].map(convertToLowerCaseAddUnderscore).join("");

module.exports = camelToSnake;
