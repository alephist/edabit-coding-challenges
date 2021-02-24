// Problem# 180
// Given three arrays of integers: arr1, arr2, arr3, return the sum of integers which are common in all three arrays.
// https://edabit.com/challenge/Ff2iFMu3exGJ4StTc

const sumCommon = (arr1, arr2, arr3) =>
  arr1.reduce((acc, curr) => {
    if (arr2.includes(curr) && arr3.includes(curr)) {
      acc += curr;
    }

    return acc;
  }, 0);

module.exports = sumCommon;
