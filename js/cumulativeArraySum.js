// Problem# 151
// Create a function that takes an array of numbers and returns an array where each number is the
// sum of itself + all previous numbers in the array.
// https://edabit.com/challenge/77eH2ZqXqEjifotZM

const cumulativeSum = (arr) => {
  const cumSumArray = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = arr.slice(0, i + 1).reduce((a, b) => a + b, 0);
    cumSumArray.push(sum);
  }

  return cumSumArray;
};

module.exports = cumulativeSum;
