// Problem# 249
// Create a function that takes a single word string and does the following:
// Concatenates inator to the end if the word ends with a consonant otherwise, concatenate -inator instead.
// Adds the word length of the original word to the end, supplied with '000'.
// https://edabit.com/challenge/xpGPz3QCAhtsZrWeW

const inatorInator = (inv) => {
  const endsInVowel = inv[inv.length - 1].match(/[aeiou]/i);

  return `${inv}${endsInVowel ? "-inator" : "inator"} ${inv.length}000`;
};

module.exports = inatorInator;
