// Create a function that finds each factor of a given number n.
// Your solution should return an array of the number(s) that meet this criteria.
// https://edabit.com/challenge/WR3Q72Jbv7Kyzu6AT

const findFactors = (num) => {
  const factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }

  return factors;
};

module.exports = findFactors;
