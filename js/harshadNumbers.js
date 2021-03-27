// Problem# 234
// A number n is a Harshad (also called Niven) number if it is divisible by the sum of its digits.
// Write a function to determine whether the given number is a Harshad number.
// https://edabit.com/challenge/p2AdWaNfMLHePoi26

const isHarshad = (num) => {
  const sum = [...num.toString()]
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);

  return num % sum === 0;
};

module.exports = isHarshad;
