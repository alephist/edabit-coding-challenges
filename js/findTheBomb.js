// Create a function that finds the word "bomb" in the given string. If found, return "Duck!!!",
// otherwise return "There is no bomb, relax.".
// https://edabit.com/challenge/r4hycBjiBNMs6AAjq

const bomb = (str) =>
  str.toLowerCase().includes("bomb") ? "Duck!!!" : "There is no bomb, relax.";

module.exports = bomb;
