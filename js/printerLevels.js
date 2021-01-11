// Given an object of how many more pages each ink color can print, output the maximum number of pages
// the printer can print before any of the colors run out.
// https://edabit.com/challenge/QXWM2oo7rQNiyDsip

const inkLevels = (inks) => Math.min(...Object.values(inks));

module.exports = inkLevels;
