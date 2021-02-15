// Problem# 164
// Given an array, rotates the values clockwise by one (the last value is sent to the first position).
// https://edabit.com/challenge/ciuEF8N3NNegxbasd

const rotateByOne = (arr) => {
  const lastElement = arr.pop();
  arr.unshift(lastElement);
  return arr;
};

module.exports = rotateByOne;
