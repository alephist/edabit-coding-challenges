// Problem# 184
// Write a function that takes an array and a number as arguments. Add the number to the end of the array,
// then remove the first element of the array. The function should then return the updated array.
// https://edabit.com/challenge/ebm9Yo3nxxniskr64

const nextInLine = (arr, num) => {
  if (!Array.isArray(arr) || !arr.length) {
    return "No array has been selected";
  }

  arr.push(num);
  arr.shift();

  return arr;
};

module.exports = nextInLine;
