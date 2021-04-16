// Problem# 274
// Given a string worm create a function that takes the length of the worm and converts it into millimeters.
// Each - represents one centimeter.
// https://edabit.com/challenge/Qt2F2qW9ZMMMqrrNT

const wormLength = (worm) =>
  !worm.length || ![...worm].every((w) => w === "-")
    ? "invalid"
    : `${worm.length * 10} mm.`;

module.exports = wormLength;
