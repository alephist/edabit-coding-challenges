// Create a function to return the amount of potatoes there are in a string.
// https://edabit.com/challenge/u6iaymtE4eYXQ2ZWR

const potatoes = (str) => (str.match(/potato/gi) || "").length;

module.exports = potatoes;
