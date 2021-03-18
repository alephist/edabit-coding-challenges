// Problem# 216
// Create a function that moves all capital letters to the front of a word.
// https://edabit.com/challenge/8n9RyHThC3dNEPCng

const capToFront = (str) => {
  const onlyCaps = str.match(/[A-Z]/g);
  const onlyLowerCase = str.match(/[a-z]/g);

  return onlyCaps.concat(onlyLowerCase).join("");
};

module.exports = capToFront;
