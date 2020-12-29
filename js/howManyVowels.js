// Create a function that takes a string and returns the number (count) of vowels contained within it.
// https://edabit.com/challenge/3EQGHyiYTNc9LPmhF

const countVowels = (str) => str.match(/[aeiou]/g).length;

module.exports = countVowels;
