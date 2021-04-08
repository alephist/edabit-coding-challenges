// Problem# 257
// Alliteration refers to a sequence of words that begin with the same letter.
// For this exercise, a sentence is correctly alliterated if all words strictly greater than 3 characters
// begin with the same letter.
// https://edabit.com/challenge/RdypN7bxyrjnyhcCe

const alliterationCorrect = (sentence) => {
  const initLetter = sentence[0].toLowerCase();

  return sentence
    .split(" ")
    .map((word) => word.toLowerCase())
    .map((word) => word.replace(/[^a-z]/g, ""))
    .filter((word) => word.length > 3)
    .every((word) => word.startsWith(initLetter));
};

module.exports = alliterationCorrect;
