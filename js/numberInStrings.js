// Problem# 291
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them.
// If there are no strings containing numbers, return an empty array.
// https://edabit.com/challenge/eCPim4XcssdZdvs32

const hasNumber = (str) => new RegExp(/\d+/, "g").test(str);

const numInStr = (arr) => arr.filter(hasNumber);

module.exports = numInStr;
