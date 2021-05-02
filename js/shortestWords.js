// Problem# 305
// Create a function that accepts a string as an argument.
// Find its shortest word(s) and return them as an array sorted alphabetically (if there are multiple shortest words).
// https://edabit.com/challenge/mYJPkSLLxWthSffR6

const createWordArray = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(/[^\w]/g, ""));

const createWordLengthArray = (arr) => arr.map((word) => word.length);

const findShortestWords = (str) => {
  const words = createWordArray(str);
  const wordLengths = createWordLengthArray(words);

  return words
    .filter((word) => word.length === Math.min(...wordLengths))
    .filter((word) => new RegExp("[a-z]", "g").test(word))
    .sort();
};

module.exports = findShortestWords;
