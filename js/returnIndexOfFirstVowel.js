// Create a function that returns the index of the first vowel in a string.
// https://edabit.com/challenge/ppBDRwSoqZYcR95Aq

const firstVowel = (str) => str.search(/[aeiou]/gi);

module.exports = firstVowel;
