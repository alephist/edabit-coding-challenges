// Problem# 220
// Try finding your ancestors and offspring with code.
// Create a function that takes a number x and a character y ("m" for male, "f" for female),
// and returns the name of an ancestor (m/f) or descendant (m/f).
// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// https://edabit.com/challenge/48EJWLhF224na8po3

const generation = (x, y) => {
  const generationList = {
    "-3": {
      m: "great grandfather",
      f: "great grandmother"
    },
    "-2": {
      m: "grandfather",
      f: "grandmother"
    },
    "-1": {
      m: "father",
      f: "mother"
    },
    0: {
      m: "me!",
      f: "me!"
    },
    1: {
      m: "son",
      f: "daughter"
    },
    2: {
      m: "grandson",
      f: "granddaughter"
    },
    3: {
      m: "great grandson",
      f: "great granddaughter"
    }
  };

  return generationList[x][y];
};

module.exports = generation;
