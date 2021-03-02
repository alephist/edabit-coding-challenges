// Problem# 189
// Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest,
// return the word closest to the start of the sentence. Characters such as apostophe, commas, periods, etc count
// as letters (e.g. O'Connor is 8 characters long).
// https://edabit.com/challenge/GL628YEyxRzSNKRxJ

const longestWord = (sentence) =>
  sentence.split(" ").sort((a, b) => b.length - a.length)[0];

module.exports = longestWord;
