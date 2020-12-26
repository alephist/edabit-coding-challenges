// Create a function that filters out an array to include numbers that only have a certain number of digits.
// https://edabit.com/challenge/RXNybvGHLuvFiWKvq

const filterDigitLength = (arr, num) =>
  arr.filter((i) => i.toString().length === num);

module.exports = filterDigitLength;
