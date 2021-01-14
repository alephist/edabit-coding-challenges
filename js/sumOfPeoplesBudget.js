// Create the function that takes an array with objects and returns the sum of people's budgets.
// https://edabit.com/challenge/tmnCStcrkdWbreKP5

const getBudgets = (arr) => arr.map((p) => p.budget).reduce((a, b) => a + b, 0);

module.exports = getBudgets;
