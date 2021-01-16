// Given an object of people and their ages, return how old the people would be after n years have passed.
// Use the absolute value of n.
// https://edabit.com/challenge/xtDkfWxEh2hbmAHvn

const afterNYears = (names, n) => {
  let updatedNames = {};

  for (const name in names) {
    Object.assign(updatedNames, { [name]: names[name] + Math.abs(n) });
  }

  return updatedNames;
};

module.exports = afterNYears;
