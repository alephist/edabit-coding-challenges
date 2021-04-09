// Problem# 259
// You are given an array of strings consisting of grocery items, with prices in parentheses.
// Return an array of prices in float format.
// https://edabit.com/challenge/fbTF9EksvFpq3wZaX

const getPrices = (arr) =>
  arr.map((item) => item.match(/\d+\.\d+/g)).map(Number);

module.exports = getPrices;
