// Problem# 198
// You will be given an object with various consumer products and their respective prices.
// Return a list of the products with a minimum price of 500 in descending order.
// https://edabit.com/challenge/neWTApTYread9ZNdP

const products = (r) =>
  Object.entries(r)
    .filter(([, value]) => value >= 500)
    .sort(([, a], [, b]) => b - a)
    .map(([key, _]) => key);

module.exports = products;
