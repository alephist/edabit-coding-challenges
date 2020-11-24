// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
// https://edabit.com/challenge/noqGmqk6StwApSGwa

const reverse = (bool) =>
  typeof bool != "boolean" ? "boolean expected" : !bool;

// Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans.
// For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
// Create a function that returns the opposite of the given boolean, as a number.
// https://edabit.com/challenge/m5j4mTviyorMfMDvn

const flipBool = (bool) => (!bool ? 1 : 0);

module.exports = { reverse, flipBool };
