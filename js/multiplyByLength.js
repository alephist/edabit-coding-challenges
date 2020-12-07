// Create a function to multiply all of the values in an array by the amount of values in the given array.
// https://edabit.com/challenge/LMhRTq3hccz2D9Lax

const multiplyLength = (arr) => arr.map((num) => num * arr.length);

module.exports = multiplyLength;
