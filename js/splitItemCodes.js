// Problem# 251
// You have an array of item codes with the following format: "[letters][digits]"
// Create a function that splits these strings into their alphabetic and numeric parts.
// https://edabit.com/challenge/Trog78Qz4bGNLFh6M

const splitCode = (item) => {
  const letters = item.match(/[A-Z]+/)[0];
  const digits = item.match(/\d+/)[0];

  return [letters, Number(digits)];
};

module.exports = splitCode;
