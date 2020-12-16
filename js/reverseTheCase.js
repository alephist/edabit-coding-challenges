// Given a string, create a function to reverse the case.
// All lower-cased letters should be upper-cased, and vice versa.
// https://edabit.com/challenge/PTvYKkvf7oytHmJFm

const reverseCase = (str) => [...str].map(reverseCharCase).join("");

const reverseCharCase = (char) =>
  char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();

module.exports = reverseCase;
