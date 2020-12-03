// Create a function which returns the number of true values there are in an array.
// https://edabit.com/challenge/GLbuMfTtDWwDv2F73

const countTrue = (arr) => arr.filter((item) => item === true).length;

module.exports = countTrue;
