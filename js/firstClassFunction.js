// Problem# 156
// Create a function that takes a number as its parameter and returns another function.The returned function must
// take an array of numbers as its parameter, and return an array of the numbers divided by the number that
// was passed into the first function.
// https://edabit.com/challenge/FEiLd6HgHcwkgHTWP

const factory = (num) => (arr) => arr.map((item) => item / num);

module.exports = factory;
