// Problem# 228
// Write a function that reverses all the words in a sentence that start with a particular letter.
// https://edabit.com/challenge/KffCqRz23XL5ewbgH

const specialReverse = (s, c) =>
  s
    .split(" ")
    .map((word) => (word.startsWith(c) ? [...word].reverse().join("") : word))
    .join(" ");

module.exports = specialReverse;
