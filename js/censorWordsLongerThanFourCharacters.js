// Problem# 231
// Create a function that takes a string and censors words over four characters with *.
// https://edabit.com/challenge/huiJkoQzegoc5qeCJ

const censor = (str) =>
  str
    .split(" ")
    .map((word) => (word.length > 4 ? "*".repeat(word.length) : word))
    .join(" ");

module.exports = censor;
