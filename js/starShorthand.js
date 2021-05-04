// Problem# 309
// Write a function that converts a string into star shorthand.
// If a character is repeated n times, convert it into character*n.
// https://edabit.com/challenge/skaEqSDppmQqApNQu

const createLetterList = (str) =>
  [...str].reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }

    return acc;
  }, {});

const toStarShorthand = (str) =>
  Object.entries(createLetterList(str))
    .map(([key, val]) => (val > 1 ? `${key}*${val}` : key))
    .join("");

module.exports = toStarShorthand;
