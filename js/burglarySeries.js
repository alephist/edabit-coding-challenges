// Burglary Series

// Part 01
// You just returned home to find your mansion has been robbed! Given an object of the stolen items,
// return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
// https://edabit.com/challenge/pLNavsePxJ87t9Nak

const stolenItems = (obj) =>
  Object.values(obj).reduce((a, b) => a + b, 0) || "Lucky you!";

module.exports = { stolenItems };
