// Problem# 254
// Create a function that converts a string of letters to their respective number in the alphabet.
// https://edabit.com/challenge/i3b97FrfXT5mr9Lnx

const alphNum = (str) =>
  [...str].map((item) => item.charCodeAt() - 65).join(" ");

module.exports = alphNum;
