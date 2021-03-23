// Problem# 225
// Create a function that takes a single string as argument and returns an ordered array containing the
// indices of all capital letters in the string.
// https://edabit.com/challenge/cRAqXCgyYnjdgktEq

const indexOfCaps = (str) => {
  const allCaps = str.match(/[A-Z]/g);

  return allCaps ? allCaps.map((letter) => str.indexOf(letter)) : [];
};

module.exports = indexOfCaps;
