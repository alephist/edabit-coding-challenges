// Problem# 272
// Create a function that counts the number of blocks of two or more adjacent 1s in an array.
// https://edabit.com/challenge/XmozNpoBjcqrKD82i

const countOnes = (arr) => {
  const match = arr.join("").match(/(1)\1+/g);

  return match ? match.length : 0;
};

module.exports = countOnes;
