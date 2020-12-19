// Write a function that removes any non-letters from a string, returning a well-known film title.
// https://edabit.com/challenge/GPKkNbytRpsAnHcrX

const lettersOnly = (str) => str.replace(/[^a-zA-Z]/g, "");

module.exports = lettersOnly;
