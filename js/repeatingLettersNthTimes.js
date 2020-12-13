// Create a function that repeats each character in a string n times.
// https://edabit.com/challenge/pggD9dH8Nwuac7fPE

const repeat = (str, num) => [...str].map((ltr) => ltr.repeat(num)).join("");

module.exports = repeat;
