// Problem# 310
// Write a function that returns a character mapping from a word.
// https://edabit.com/challenge/9MEWMJ5eX8EAiWSs5

const characterMapping = (str) => {
  const uniqueLetterArr = [...new Set(str)];

  return [...str].map((letter) => uniqueLetterArr.indexOf(letter));
};

module.exports = characterMapping;
