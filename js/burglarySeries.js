// Burglary Series

// Part 01
// Problem# 125
// You just returned home to find your mansion has been robbed! Given an object of the stolen items,
// return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
// https://edabit.com/challenge/pLNavsePxJ87t9Nak

const stolenItems = (obj) =>
  Object.values(obj).reduce((a, b) => a + b, 0) || "Lucky you!";

// Part 02
// Problem# 126
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items,
// return the most expensive item on the list.
// https://edabit.com/challenge/yMEs8bXPyZenPEYLM

const mostExpensiveItem = (obj) => {
  let maxValue = Math.max(...Object.values(obj));

  return Object.keys(obj).filter((key) => obj[key] === maxValue)[0];
};

module.exports = { stolenItems, mostExpensiveItem };
