// Write a function that stutters a word as if someone is struggling to read it.
// The first two letters are repeated twice with an ellipsis ... and space after each,
// and then the word is pronounced with a question mark ?.
// https://edabit.com/challenge/3QHfHxp3WkuQsMLXd

const stutter = (word) => `${word.substring(0, 2)}... `.repeat(2) + `${word}?`;

module.exports = stutter;
