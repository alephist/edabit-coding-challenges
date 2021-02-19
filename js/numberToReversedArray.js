// Problem# 172
// Create a function that takes a number and returns an array with the digits of the number in reverse order.
// https://edabit.com/challenge/2nLTDz2yk4vW8Cnwv

const reverseArr = (num) => [...String(num)].map(Number).reverse();

module.exports = reverseArr;
