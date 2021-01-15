// Given a number and an object with min and max properties, return true if the number lies
// within the given range (inclusive).
// https://edabit.com/challenge/Wp8uSyh2tfpdzR4CP

const isInRange = (num, range) => num >= range.min && num <= range.max;

module.exports = isInRange;
