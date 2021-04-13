// Problem# 268
// Create a function that takes both a string and an array of numbers as arguments.
// Rearrange the letters in the string to be in the order specified by the index numbers. Return the "remixed" string.
// https://edabit.com/challenge/TeadejgLka6ZxKhWM

const remix = (str, arr) =>
  arr
    .reduce((acc, curr, i) => {
      acc[curr] = str[i];

      return acc;
    }, [])
    .join("");

module.exports = remix;
