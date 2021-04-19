// Problem# 280
// Given a string, reverse all the words which have odd length. The even length words are not changed.
// https://edabit.com/challenge/yYfQoo6rkMezauG77

const reverseWord = (word) => [...word].reverse().join("");

const reverseOdd = (str) =>
  str
    .split(" ")
    .map((word) => (word.length % 2 === 0 ? word : reverseWord(word)))
    .join(" ");

module.exports = reverseOdd;
