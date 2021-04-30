// Problem# 301
// Create a function that takes a sentence and returns the number of letters in this sentence sorted alphabetically.
// https://edabit.com/challenge/xZapQmtZz4Eu5Zjqs

// Function compositions
// Convert string input to char array
const createCharArray = (str) => [...str.toLowerCase().replace(/[^a-z]/g, "")];

// Create letter count list from char array
const createLetterCountList = (arr) =>
  arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }

    return acc;
  }, {});

// Create key-value array from list
const createKeyValueArr = (obj) => Object.entries(obj);

// Sort key-value array by key
const sortKeyValueArr = (arr) =>
  arr.sort(([keyA], [keyB]) => {
    if (keyA > keyB) return 1;
    if (keyA < keyB) return -1;
    return 0;
  });

// Convert key-value array to string value
const convertKeyValueArrToStr = (arr) =>
  arr.map(([key, val]) => `${key}:${val}`).join(" ");

// Piping Function
const pipe = (...fns) => (input) => fns.reduce((acc, fn) => fn(acc), input);

// Main function to export
const charCount = pipe(
  createCharArray,
  createLetterCountList,
  createKeyValueArr,
  sortKeyValueArr,
  convertKeyValueArrToStr
);

module.exports = charCount;
