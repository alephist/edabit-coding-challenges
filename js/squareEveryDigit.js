// Create a function that squares every digit of a number.
// https://edabit.com/challenge/Tnjbf6pdFsCjmaF8p

const squareDigits = (num) => {
  let squaredDigits = [...num.toString()].map((i) => Number(i) ** 2).join("");

  return Number(squaredDigits);
};

module.exports = squareDigits;
