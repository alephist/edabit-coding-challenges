// Problem# 181
// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries
// in the main diagonal (i.e. the diagonal line from the top left to the bottom right).
// Write a function that takes a square matrix and computes its trace.
// https://edabit.com/challenge/humnHvXGXnBnStg5F

const trace = (arr) => arr.reduce((acc, curr, i) => acc + curr[i], 0);

module.exports = trace;
