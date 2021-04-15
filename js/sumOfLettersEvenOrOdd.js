// Problem# 271
// Create a function that takes a string and returns true if the sum of the position of every letter in the
// alphabet is even and false if the sum is odd.
// https://edabit.com/challenge/RMJwgK3MzAb5DQoFY

const isAlpha = (str) => {
  const sum = [...str.toLowerCase().replace(/[^a-z]/g, "")].reduce(
    (acc, curr) => acc + (curr.charCodeAt() - 96),
    0
  );

  return sum % 2 === 0;
};

module.exports = isAlpha;
