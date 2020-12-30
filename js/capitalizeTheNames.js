// Create a function that takes an array of names and returns an array where only
// the first letter of each name is capitalized.
// https://edabit.com/challenge/ZN5cpGPNRS3nrjMo5

const transform = (item) =>
  `${item.substring(0, 1).toUpperCase()}${item.substring(1).toLowerCase()}`;

const capMe = (arr) => arr.map(transform);

module.exports = capMe;
