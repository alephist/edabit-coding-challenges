// Problem# 279
// Create a function that takes a string and returns the number of alphanumeric characters that occur more than once.
// https://edabit.com/challenge/p7vkhrwcWK7iPSqix

const createLetterCountList = (str) =>
  [...str].reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }

    return acc;
  }, {});

const duplicateCount = (str) =>
  Object.values(createLetterCountList(str)).filter((val) => val > 1).length;

module.exports = duplicateCount;
