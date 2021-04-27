// Problem# 295
// Build a function that creates histograms.
// Every bar needs to be on a new line and its length corresponds to the numbers in the array passed as an argument.
// The second argument of the function represents the character to be used for the bar.
// https://edabit.com/challenge/st8SZGoa3WE8Xrhf7

const histogram = (arr, char) => arr.map((num) => char.repeat(num)).join("\n");

module.exports = histogram;
