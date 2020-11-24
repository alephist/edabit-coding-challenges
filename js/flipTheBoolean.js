// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
// https://edabit.com/challenge/noqGmqk6StwApSGwa

const reverse = (bool) =>
  typeof bool != "boolean" ? "boolean expected" : !bool;

module.exports = reverse;
