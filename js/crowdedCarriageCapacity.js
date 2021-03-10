// Problem# 203
// A train has a maximum capacity of n passengers overall, which means each carriage's capacity will share an equal
// proportion of the maximum capacity.
// Create a function which returns the index of the first carriage which holds 50% or less of its maximum capacity.
// If no such carriage exists, return -1.
// https://edabit.com/challenge/auxE4Rj2YNcHNqE7H

const findSeat = (n, arr) => {
  const carriageMaxCap = n / arr.length;

  return arr.findIndex((carriageCap) => carriageCap / carriageMaxCap <= 0.5);
};

module.exports = findSeat;
