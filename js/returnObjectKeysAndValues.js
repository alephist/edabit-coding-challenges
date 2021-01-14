// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.
// https://edabit.com/challenge/AP4hnF97anRc2mAZ6

const keysAndValues = (obj) => [Object.keys(obj), Object.values(obj)];

module.exports = keysAndValues;
