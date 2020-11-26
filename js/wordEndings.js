// Create a function that adds a string ending to each member in an array.
// https://edabit.com/challenge/hwWLHcDoPZmXcGHyd

const addEnding = (arr, ending) => arr.map((word) => `${word}${ending}`);

module.exports = addEnding;
