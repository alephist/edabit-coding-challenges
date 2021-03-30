// Problem# 240
// Create a function that keeps only strings with repeating identical characters.
// https://edabit.com/challenge/fxvceQdv7RHQzrx2J

const identicalFilter = (arr) => arr.filter((item) => new Set(item).size === 1);

module.exports = identicalFilter;
