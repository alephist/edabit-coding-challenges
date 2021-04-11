// Problem# 264
// Create a function that accepts a string and returns true if it's in the format of a proper phone number and false
// if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.
// This is what a valid phone number looks like: (123) 456-7890
// https://edabit.com/challenge/nHaKL55KwW3XaGrAw

const isValidPhoneNumber = (str) =>
  new RegExp(/^(\(([0-9]){3}\))(\s([0-9]){3}\-([0-9]){4})$/).test(str);

module.exports = isValidPhoneNumber;
