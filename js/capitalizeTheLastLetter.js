// Problem# 236
// Create a function that capitalizes the last letter of every word.
// https://edabit.com/challenge/WrXmsGDGxqkjNCZtw

const capLast = (txt) =>
  txt
    .split(" ")
    .map((letter) => `${letter.slice(0, -1)}${letter.slice(-1).toUpperCase()}`)
    .join(" ");

module.exports = capLast;
