// Problem# 252
// Create a function that determines whether a string is a valid hex code.
// A hex code must begin with a pound key # and is exactly 6 characters in length.
// Each character must be a digit from 0-9 or an alphabetic character from A-F.
// All alphabetic characters may be uppercase or lowercase.
// https://edabit.com/challenge/cWvYKp8JTE9ozC6NF

const isValidHexCode = (str) => new RegExp("^#[0-9a-f]{6}$", "i").test(str);

module.exports = isValidHexCode;
