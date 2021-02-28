// Problem# 185
// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image.
// Replace the 0s with 1s and vice versa.
// https://edabit.com/challenge/uNzzNQPDQferAAGMc

const reverseImage = (image) =>
  image.map((arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr[i] = 1;
      } else {
        arr[i] = 0;
      }
    }

    return arr;
  });

module.exports = reverseImage;
