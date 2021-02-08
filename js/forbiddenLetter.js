// Problem# 152
// Given a letter and an array of words, return whether the letter does not appear in any of the words.
// https://edabit.com/challenge/AhFCvDdQeA7TnKSqe

const forbiddenLetter = (char, arr) => !arr.some((word) => word.includes(char));

module.exports = forbiddenLetter;
