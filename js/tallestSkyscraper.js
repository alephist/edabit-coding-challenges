// Problem# 214
// A city skyline can be represented as a 2-D array with 1s representing buildings.
// Create a function that takes a skyline (2-D array of 0's and 1's) and returns the height of the tallest skyscraper.
// https://edabit.com/challenge/bJJTkKdyBwxWy4J3o

const tallestSkyscraper = (arr) =>
  arr.filter((skyline) => skyline.includes(1)).length;

module.exports = tallestSkyscraper;
