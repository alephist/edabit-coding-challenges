// Write two functions:
// toInt() : A function to convert a string to an integer
// toStr() : A function to convert an integer to a string
// https://edabit.com/challenge/EpCYjhzPKtCkkspL9

const toInt = (str) => Number(str);

const toStr = (num) => num.toString();

module.exports = {
  toInt,
  toStr
};
