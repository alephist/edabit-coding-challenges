// Problem# 197
// Given an object containing the names and ages of a group of people, return the name of the oldest person.
// https://edabit.com/challenge/vPmDvWoP2wj5KpWZi

const oldest = (people) => {
  const oldestAge = Math.max(...Object.values(people));

  return Object.keys(people).find((key) => people[key] === oldestAge);
};

module.exports = oldest;
