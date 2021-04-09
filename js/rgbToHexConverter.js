// Problem# 260
// Create a function that converts color in RGB format to Hex format.
// https://edabit.com/challenge/dLfz4nn5GYL8cLsGM

const getHexValue = (num) => {
  const hex = Number(num).toString(16);

  return hex.length < 2 ? `0${hex}` : hex;
};

const rgbToHex = (col) => {
  const hexValues = col.match(/\d+/g).map(getHexValue);

  return `#${hexValues.join("")}`;
};

module.exports = rgbToHex;
