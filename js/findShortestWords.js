// Problem# 294
// Create a function that accepts a string as an argument. Find its shortest word(s) and
// return them as an array sorted alphabetically (if there are multiple shortest words).
// https://edabit.com/challenge/mYJPkSLLxWthSffR6

const findShortestWords = (str) => {
  const words = str
    .toLowerCase()
    .split(" ")
    .map((word) => word.replace(/[^\w]/g, ""));
  const wordLengths = words.map((word) => word.length);

  return words
    .filter(
      (word) => word.length === Math.min(...wordLengths) && word.match(/[a-z]+/)
    )
    .sort();
};

module.exports = findShortestWords;
