// Write a function that accepts the width and height (m, n) and an optional proc s and
// generates an array with m elements. Each element is a string consisting of either:
// he default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// https://edabit.com/challenge/qWhoswdp35f8xzqGw

const makeRug = (m = 3, n, s = "#") => {
  const rug = [];

  for (let i = 0; i < m; i++) {
    rug.push(s.repeat(n));
  }

  return rug;
};

module.exports = makeRug;
