// Problem# 196
// You go to a jewelry shop and try to find the most expensive piece of jewelry.
// You write down the name of each piece of jewelry and its price.
// Create a function that gets the name of the piece of jewelry with the highest price and returns
// "The most expensive one is the {name of jewelry piece}".
// https://edabit.com/challenge/x2LS9YvyK38uH8B7J

const mostExpensive = (obj) => {
  const highestPrice = Math.max(...Object.values(obj));

  const expensiveJewelry = Object.keys(obj).filter(
    (key) => obj[key] === highestPrice
  )[0];

  return `The most expensive one is the ${expensiveJewelry}`;
};

module.exports = mostExpensive;
