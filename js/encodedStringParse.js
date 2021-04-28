// Problem# 298
// Create a function which takes in an encoded string and returns an object
// https://edabit.com/challenge/qPK2Cz8LS2rGKYz7h

const parseCode = (str) => {
  const [firstName, lastName, id] = str.match(/[a-z1-9]+/gi);

  return { firstName, lastName, id };
};

module.exports = parseCode;
