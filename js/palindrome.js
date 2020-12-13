// A palindrome is a word that is identical forward and backwards (examples: mom, kayak, racecar).
// Given a word, create a function that checks whether it is a palindrome.
// https://edabit.com/challenge/zvFri3sia4iNPTeqC

const checkPalindrome = (str) => str === [...str].reverse().join("");

module.exports = checkPalindrome;
