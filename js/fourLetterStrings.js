// Create a function that takes an array of strings and returns the words that are exactly four letters.
// https://edabit.com/challenge/havnWL4BimvoaXNMn

const isFourLetters = (arr) => arr.filter((item) => item.length === 4);

module.exports = isFourLetters;
