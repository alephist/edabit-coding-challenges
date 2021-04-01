// Problem# 243
// Create a function that takes a string str and modifies the given string as per the below example:
// mumbling("MubAshIr") ➞ "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr"
// https://edabit.com/challenge/ECoaEwFfLwF3Z8EE9

const mumbling = (str) =>
  [...str]
    .map((item) => item.toUpperCase())
    .map((item, i) => `${item}${item.toLowerCase().repeat(i)}`)
    .join("-");

module.exports = mumbling;
