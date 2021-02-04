// Problem# 148
// Create a function that takes a string of name and checks how much good is the given name.
// Add up the letters of your name to get the total score.
// https://edabit.com/challenge/M9KuMowrYvH24Jwio

const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23
};

const nameScore = (name) => {
  let score = [...name].reduce((acc, curr) => acc + scores[curr], 0);

  if (score <= 60) {
    return "NOT TOO GOOD";
  } else if (score >= 61 && score <= 300) {
    return "PRETTY GOOD";
  } else if (score >= 301 && score <= 599) {
    return "VERY GOOD";
  }

  return "THE BEST";
};

module.exports = nameScore;
