// Create a function that takes two numbers as arguments (num, length) and
// returns an array of multiples of num until the array length reaches length.
// https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

const getMultiples = (num, length) =>
  Array.from({ length }, (_, i) => i + 1).map((i) => num * i);

module.exports = getMultiples;
