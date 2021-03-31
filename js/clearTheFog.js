// Problem# 242
// Create a function which returns the word in the string, but with all the fog letters removed.
// However, if the string is clear from fog, return "It's a clear day!".
// https://edabit.com/challenge/cHNEFGeQrH3nonwJw

const clearFog = (str) => {
  const pattern = /[fgo]/gi;

  return str.match(pattern) ? str.replace(pattern, "") : "It's a clear day!";
};

module.exports = clearFog;
