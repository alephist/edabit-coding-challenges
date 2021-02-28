// Problem# 186
// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.
// https://edabit.com/challenge/jrdEvTaFogLcpN2fH

const squarePatch = (n) => Array(n).fill(Array(n).fill(n));

module.exports = squarePatch;
