// Problem# 308
// Given a word, create an object that stores the indexes of each letter in an array.
// Make sure the letters are the keys.
// Make sure the letters are symbols.
// Make sure the indexes are stored in an array and those arrays are values.
// https://edabit.com/challenge/Bd2jQS9xA6QecB34h

const createLetterMap = (str) => {
  const letterMap = new Map();

  for (let i = 0; i < str.length; i++) {
    if (!letterMap.has(str[i])) {
      letterMap.set(str[i], []);
    }

    letterMap.get(str[i]).push(i);
  }

  return letterMap;
};

const mapLetters = (word) => Object.fromEntries(createLetterMap(word));

module.exports = mapLetters;
