// Problem# 277
// Create a function that returns the number of palindrome numbers in a specified range (inclusive).
// For example, between 8 and 34, there are 5 palindromes: 8, 9, 11, 22 and 33. Between 1550 and 1552
// there is exactly one palindrome: 1551.
// https://edabit.com/challenge/BRoBDeEc2be7wm8BD

const isPalindrome = (num) =>
  num.toString().length === 1
    ? true
    : [...num.toString()].reverse().join("") === num.toString();

const countPalindromes = (num1, num2) => {
  const nums = [];

  for (let i = num1; i <= num2; i++) nums.push(i);

  return nums.filter(isPalindrome).length;
};

module.exports = countPalindromes;
