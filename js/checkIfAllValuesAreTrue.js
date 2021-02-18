// Problem# 170
// Create a function that returns true if all parameters are truthy, and false otherwise.
// https://edabit.com/challenge/ttiutYw6NyphfxuCG

const allTruthy = (args) => args.every((item) => !!item);

module.exports = allTruthy;
