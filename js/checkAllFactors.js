// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.
// https://edabit.com/challenge/k5k3aXWp7aibft74n

const checkFactors = (factors, num) => factors.every((i) => num % i === 0);

module.exports = checkFactors;
