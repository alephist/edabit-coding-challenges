// Problem# 168
// Create a function which concantenates the number 7 to the end of every chord in an array.
// Ignore all chords which already end with 7.
// https://edabit.com/challenge/EMuszDzF66k9J73HG

const jazzify = (arr) =>
  arr.map((chord) => (chord.endsWith("7") ? chord : `${chord}7`));

module.exports = jazzify;
