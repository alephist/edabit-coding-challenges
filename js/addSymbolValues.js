// Problem# 289
// Write a function that takes an array of arrays and returns the value of all of the symbols in it,
// where each symbol adds or takes something from the total score. Symbol values:
// # = 5
// O = 3
// X = 1
// ! = -1
// !! = -3
// !!! = -5
// An array of arrays containing 2 #s, a O, and a !!! would equal (0 + 5 + 5 + 3 - 5) 8.
// If the final score is negative, return 0 (e.g. 3 #s, 3 !!s, 2 !!!s and a X would be
// (0 + 5 + 5 + 5 - 3 - 3 - 3 - 5 - 5 + 1) -3, so return 0.
// https://edabit.com/challenge/sE7z8FkWycJHrAvu9

const symbolValues = {
  "#": 5,
  O: 3,
  X: 1,
  "!": -1,
  "!!": -3,
  "!!!": -5
};

const checkScore = (arr) => {
  const totalScore = arr.flat().reduce((acc, curr) => {
    acc += symbolValues[curr];

    return acc;
  }, 0);

  return totalScore > 0 ? totalScore : 0;
};

module.exports = checkScore;
