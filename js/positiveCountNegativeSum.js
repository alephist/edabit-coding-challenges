// Create a function that takes an array of positive and negative numbers.
// Return an array where the first element is the count of positive numbers
// and the second element is the sum of negative numbers.
// https://edabit.com/challenge/xXJLZry3vYd4erPct

const countPosSumNeg = (arr) => {
  if (!arr.length) return [];

  let posCount = arr.filter((num) => num > 0).length;
  let negSum = arr.filter((num) => num < 1).reduce((a, b) => a + b, 0);

  return [posCount, negSum];
};

module.exports = countPosSumNeg;
