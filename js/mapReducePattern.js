// You will be implementing a basic case of the map-reduce pattern in programming.
// Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.
// Given a vector stored as an array of numbers, find the magnitude of the vector
// (this is similar to the function Math.hypot()). Use the standard distance formula
// for n-dimensional Cartesian coordinates.
// https://edabit.com/challenge/yyKv8f4FrZPDaJbDs

const getMagnitude = (vector) => {
  let sumOfSquares = vector
    .map((num) => Math.pow(num, 2))
    .reduce((x, y) => x + y, 0);

  return Math.sqrt(sumOfSquares);
};

module.exports = getMagnitude;
