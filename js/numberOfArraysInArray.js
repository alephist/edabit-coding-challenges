// Problem# 173
// Return the total number of arrays inside a given array.
// https://edabit.com/challenge/TwJghdCGSbDywLZz7

const numOfSubarrays = (arr) => arr.filter(Array.isArray).length;

module.exports = numOfSubarrays;
