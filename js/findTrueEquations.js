// Problem# 283
// In this challenge you will be given an array containing equations, with each equation written as a string.
// Here's an example: ["1+1=2", "2+2=3", "5*5=10", "3/3=1"]
// Write a function which, given an array of equations as above, returns only the true equations.
// https://edabit.com/challenge/LaHKrCtXnpJAK7G9h

const validateEquation = (num1, operation, num2) => {
  switch (operation) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;
  }
};

const isValidEquation = (eqn) => {
  const [operation] = eqn.match(/[+\-*\/]/g);
  const [num1, num2, result] = eqn.match(/\d+/g);

  return (
    validateEquation(Number(num1), operation, Number(num2)) === Number(result)
  );
};

const trueEquations = (arr) => arr.filter(isValidEquation);

module.exports = trueEquations;
