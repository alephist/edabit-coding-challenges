// Create a function that flips M's to W's (all uppercase).
// https://edabit.com/challenge/9fQ4KKTjAdKeTbYxm

const wumbo = (str) => str.toUpperCase().replace(/M/g, "W");

module.exports = wumbo;
