// Create a function that takes an array of items, removes all duplicate items and
// returns a new array in the same sequential order as the old array (minus duplicates).
// https://edabit.com/challenge/Wd7WKqm95jhcAGATG

const removeDups = (arr) => [...new Set(arr)];

module.exports = removeDups;
