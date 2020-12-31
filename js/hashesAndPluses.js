// Create a function that returns the number of hashes and pluses in a string.
// https://edabit.com/challenge/ydBcGvv3n447nbxCy

const hashPlusCount = (str) => [
  (str.match(/\#/g) || "").length,
  (str.match(/\+/g) || "").length
];

module.exports = hashPlusCount;
