// Problem# 210
// Write a function that finds the largest number in an array nums that is also even. If there is no even number, return -1.
// https://edabit.com/challenge/DX898Gd3L6QXAWMSf

const largestEven = (nums) => {
  const evens = nums.filter((num) => num % 2 === 0);

  return evens.length ? Math.max(...evens) : -1;
};

module.exports = largestEven;
