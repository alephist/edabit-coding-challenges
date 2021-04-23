// Problem# 288
// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s).
// https://edabit.com/challenge/pbK3wzLDvdwfEKgMt

const findBrokenKeys = (str1, str2) => {
  const brokenKeys = [...str1].filter((letter, i) => letter !== [...str2][i]);

  return [...new Set(brokenKeys)];
};

module.exports = findBrokenKeys;
