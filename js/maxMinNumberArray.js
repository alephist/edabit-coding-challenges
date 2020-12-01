// Create a function that takes an array and returns the difference between the biggest and smallest numbers.
// https://edabit.com/challenge/v9DwaeR6NQoapEvHh

const diffMaxMin = (arr) => Math.max(...arr) - Math.min(...arr);

module.exports = diffMaxMin;
