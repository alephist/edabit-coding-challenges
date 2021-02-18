// Problem# 169
// Create a function that determines the age difference between spouses in a household. The ages ages in years of
// the parents and their children are given in an array.
// If there is no difference in age between the parents, return "No age difference between spouses.".
// Otherwise, return the difference in years. Check the examples for more clarification.
// https://edabit.com/challenge/3pJCxeSiKFC9gKtYt

const ageDifference = (ages) => {
  const [age1, age2] = ages.sort((a, b) => b - a);

  const diff = age1 - age2;

  return age1 === age2
    ? "No age difference between spouses."
    : `${diff} year${diff === 1 ? "" : "s"}`;
};

module.exports = ageDifference;
