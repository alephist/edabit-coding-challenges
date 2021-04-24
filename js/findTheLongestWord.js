// Problem# 290
// Write a function that will return the longest word in a sentence.
// In cases where more than one word is found, return the first one.
// https://edabit.com/challenge/cq8taH4P7NkTm3hL2

const findLongest = (sentence) => {
  const words = sentence
    .replace("'", " ")
    .split(" ")
    .map((word) => word.replace(/[^a-z]/gi, "").toLowerCase());

  const wordLengths = words.map((word) => word.length);

  return words.find((word) => word.length === Math.max(...wordLengths));
};

module.exports = findLongest;
