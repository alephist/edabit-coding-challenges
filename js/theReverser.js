// Problem# 224
// The "Reverser" takes a string as input and returns that string in reverse order, with the opposite case.
// https://edabit.com/challenge/m3Ho3E9KDE7i8XKCn

const reverse = (str) =>
  [...str]
    .reverse()
    .map((letter) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join("");

module.exports = reverse;
