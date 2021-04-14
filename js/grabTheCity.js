// Problem# 269
// Write a function to return the city from each of these vacation spots.
// https://edabit.com/challenge/D47BAo44DZKqnLg5M

const removeSquareBrackets = (str) => str.replace(/\[/, "").replace(/\]/, "");

const grabCity = (str) => {
  const matches = str.match(/\[[a-z\s]+\]/gi).map(removeSquareBrackets);

  return matches[matches.length - 1];
};

module.exports = grabCity;
