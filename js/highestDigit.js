// Create a function that takes a number as an argument and returns the highest digit in that number.
// https://edabit.com/challenge/YJuhHKSmNCaKNHcD3

const highestDigit = (number) => {
  const numbers = [...number.toString()].map(Number);

  return Math.max(...numbers);
};

module.exports = highestDigit;
