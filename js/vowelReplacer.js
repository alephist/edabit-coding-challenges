// Create a function that replaces all the vowels in a string with a specified character.
// https://edabit.com/challenge/5FhabpvT3FF75kgCi

const replaceVowels = (str, ch) => str.replace(/[aeiou]/gi, ch);

module.exports = replaceVowels;
