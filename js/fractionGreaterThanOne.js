// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
// https://edabit.com/challenge/L65zKSJKaDAj6JGyt

const greaterThanOne = (frac) => {
  const [num, den] = frac.split("/").map(Number);

  return num / den > 1;
};

module.exports = greaterThanOne;
