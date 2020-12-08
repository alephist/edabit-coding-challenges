// Create a function which makes the last character of a string repeat n number of times.
// https://edabit.com/challenge/iKEQo67KofMY4NSsP

const modifyLast = (str, n) => `${str}${str.slice(-1).repeat(n - 1)}`;

module.exports = modifyLast;
