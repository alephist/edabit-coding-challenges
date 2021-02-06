// Problem# 150
// A value is omnipresent if it exists in every subarray inside the main array.
// Create a function that determines whether an input value is omnipresent for a given array.
// https://edabit.com/challenge/Twbmxzd3JwkkqAWES

const isOmnipresent = (arr, val) => arr.every((item) => item.includes(val));

module.exports = isOmnipresent;
