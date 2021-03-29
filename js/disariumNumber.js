// Problem# 237
// A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.
// Create a function that determines whether a number is a Disarium or not.
// https://edabit.com/challenge/pyxXekyofGasXX2me

const isDisarium = (n) => {
  const total = [...n.toString()]
    .map(Number)
    .reduce((acc, curr, i) => acc + Math.pow(curr, i + 1), 0);

  return n === total;
};

module.exports = isDisarium;
