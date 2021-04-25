// Problem# 292
// Write a function that inserts a white space between every instance of a lower character followed
// immediately by an upper character.
// https://edabit.com/challenge/ew9dry9RzoaeiTzwX

const isUpperCase = (letter) => letter === letter.toUpperCase();

const insertWhitespace = (str) =>
  [...str]
    .map((letter) => (isUpperCase(letter) ? ` ${letter}` : letter))
    .join("")
    .trim();

module.exports = insertWhitespace;
