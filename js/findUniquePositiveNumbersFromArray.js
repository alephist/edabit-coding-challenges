// Problem# 179
// Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.
// https://edabit.com/challenge/Fx2NdxGzayHpfu8pS

const uniqueArr = (arr) => {
  const positives = arr.filter((num) => num > 0);

  return [...new Set(positives)];
};

module.exports = uniqueArr;
