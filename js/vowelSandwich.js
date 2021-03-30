// Problem# 239
// Create a function which validates whether a 3 character string is a vowel sandwich.
// In order to have a valid sandwich, the string must satisfy the following rules:
// The first and last characters must be a consonant.
// The character in the middle must be a vowel.
// https://edabit.com/challenge/cSymahmP7vfHSm2jF

const isConsonant = (letter) => new RegExp(/[^aeiou]/).test(letter);

const isVowelSandwich = (str) =>
  str.length === 3 &&
  new RegExp(/[aeiou]/).test(str[1]) &&
  isConsonant(str[0]) &&
  isConsonant(str[2]);

module.exports = isVowelSandwich;
