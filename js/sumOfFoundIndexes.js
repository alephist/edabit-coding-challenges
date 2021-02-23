// Problem# 178
// Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the
// array which matches the chosen number.
// https://edabit.com/challenge/TTu48ECaTRwZDj69x

const sumFoundIndexes = (arr, n) =>
  arr.reduce((acc, curr, i) => {
    if (curr === n) {
      acc += i;
    }

    return acc;
  }, 0);

module.exports = sumFoundIndexes;
