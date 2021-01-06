// Write a function that returns true if an object is empty, and false otherwise.
// https://edabit.com/challenge/nGybgqB9agSqvBszF

const isEmpty = (obj) => !Object.keys(obj).length;

module.exports = isEmpty;
