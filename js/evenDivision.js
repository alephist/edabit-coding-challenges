// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
// https://edabit.com/challenge/JfB9mWmbwYHbupxCB

const dividesEvenly = (a, b) => {
  if (a < b) throw new Error("a must be greater than b");

  return a % b === 0;
};

module.exports = dividesEvenly;
