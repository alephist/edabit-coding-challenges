// Problem# 258
// Return true if the sum of ASCII values of the first string is same as the sum of ASCII values of the second string,
// otherwise return false.
// https://edabit.com/challenge/y6TD7s63sm9RwByLY

const getASCIISum = (str) =>
  [...str].reduce((acc, curr) => acc + curr.charCodeAt(), 0);

const isSameASCII = (a, b) => getASCIISum(a) === getASCIISum(b);

module.exports = isSameASCII;
