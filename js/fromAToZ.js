// Problem# 276
// Given a string indicating a range of letters, return a string which includes all the letters in that range,
// including the last letter. Note that if the range is given in capital letters, return the string in capitals also!
// https://edabit.com/challenge/sJSKWWeSYqov6ew44

const gimmeTheLetters = (spectrum) => {
  const [minValue, maxValue] = spectrum
    .split("-")
    .map((letter) => letter.charCodeAt());

  if (minValue === maxValue) return String.fromCharCode(minValue);

  const letters = [];

  for (let i = minValue; i <= maxValue; i++) {
    letters.push(String.fromCharCode(i));
  }

  return letters.join("");
};

module.exports = gimmeTheLetters;
