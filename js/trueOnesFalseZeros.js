// Create a function that returns an array of booleans from a given number by iterating through the number
// one digit at a time and appending true into the array if the digit is 1 and false otherwise.
// https://edabit.com/challenge/3BqLw3Rp85Y94nAho

const integerBoolean = (n) => [...n].map((i) => !!Number(i));

module.exports = integerBoolean;
