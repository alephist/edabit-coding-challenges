// Create a function that takes the month and year (as integers) and returns the number of days in that month.
// https://edabit.com/challenge/wNhCHwPXNLJwrTith

const getDays = (month, year) => new Date(year, month, 0).getDate();

module.exports = getDays;
