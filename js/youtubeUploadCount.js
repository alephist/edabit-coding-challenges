// You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments.
// Each date represent a video that was uploaded on that day.
// Return the number of uploads for a given month.
// https://edabit.com/challenge/GoXcArzHKTWaA8C2z

const uploadCount = (dates, month) =>
  dates.filter((date) => date.startsWith(month)).length;

module.exports = uploadCount;
