// Problem# 275
// Create a function that takes an array of factorial expressions and returns their sum.
// https://edabit.com/challenge/syor4LetxQytquHdx

const getFactorial = (num) => {
  if (num <= 0) return 1;

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

const evalFactorial = (arr) =>
  arr.reduce((acc, curr) => {
    let num = Number(curr.replace("!", ""));

    acc += getFactorial(num);

    return acc;
  }, 0);

module.exports = evalFactorial;
