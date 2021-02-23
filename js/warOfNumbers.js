// Problem# 177
// There's a great war between the even and odd numbers. Many numbers already lost their life in this war and
// it's your task to end this. You have to determine which group sums larger: the even, or the odd. The larger group wins.
// Create a function that takes an array of integers, sums the even and odd numbers separately,
// then returns the difference between sum of even and odd numbers.
// https://edabit.com/challenge/Aofd78q72sAtgCyEY

const warOfNumbers = (arr) => {
  const [sumEven, sumOdd] = arr.reduce(
    (acc, curr) => {
      if (curr % 2 === 0) {
        acc[0] += curr;
      } else {
        acc[1] += curr;
      }

      return acc;
    },
    [0, 0]
  );

  return Math.abs(sumEven - sumOdd);
};

module.exports = warOfNumbers;
