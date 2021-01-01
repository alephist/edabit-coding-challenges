// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements
// in the given array. Create a function that takes an array and returns the sum of all numbers in the array.
// https://edabit.com/challenge/PWqkt9HiLcJSr6QEY

const numbersSum = (arr) =>
  arr.filter((item) => typeof item === "number").reduce((a, b) => a + b, 0);

module.exports = numbersSum;
