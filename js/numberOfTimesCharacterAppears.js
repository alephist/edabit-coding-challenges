// Problem# 293
// Create a function that returns the number of times a character appears in each word in a sentence.
// Treat upper and lower case characters of the same letter as being identical (e.g. a exists in Anna twice, not once).
// https://edabit.com/challenge/Mbmyf5Q2bXJvdtaiv

const checkMatches = (word, char) => {
  const re = new RegExp(`${char}`, "ig");
  const matches = word.match(re);

  return matches ? matches.length : 0;
};

const charAppears = (sentence, char) =>
  sentence.split(" ").map((word) => checkMatches(word, char));

module.exports = charAppears;
