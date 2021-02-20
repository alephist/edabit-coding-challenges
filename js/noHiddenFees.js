// Problem# 174
// Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total
// (i.e. the total is greater than the sum of prices), otherwise return false
// https://edabit.com/challenge/LSw9Tgs6yMgQ4JfdX

const hasHiddenFee = (prices, t) => {
  const totalPrice = prices
    .map((price) => Number(price.replace("$", "")))
    .reduce((a, b) => a + b, 0);

  return Number(t.replace("$", "")) > totalPrice;
};

module.exports = hasHiddenFee;
