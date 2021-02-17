// Problem# 167
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year
// of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
// https://edabit.com/challenge/rqu2efZF7N2MEYDWk

const birthdayCakeCandles = (candles) =>
  candles.filter((candle) => candle === Math.max(...candles)).length;

module.exports = birthdayCakeCandles;
