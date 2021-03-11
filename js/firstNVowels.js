// Problem# 205
// Write a function that returns the first n vowels of a string.
// https://edabit.com/challenge/2FBEMqxiZ2z9efgQB

const firstNVowels = (s, n) => {
  const vowels = s.match(/[aeiou]/g);

  return n > vowels.length ? "invalid" : vowels.slice(0, n).join("");
};

module.exports = firstNVowels;
