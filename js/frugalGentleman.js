// Problem# 200
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine.
// However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman
// (yet disliking looking like a cheapskate), he decides to use a very simple rule.
// In any selection of two or more wines, he will always buy the second-cheapest.
// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party.
// If given an empty array, return null. If given an array of only one, Atticus will buy that wine
// https://edabit.com/challenge/ujzhzyvGoASKxSAib

const chosenWine = (wines) => {
  const sortedWines = wines.sort((a, b) => b.price - a.price);

  return sortedWines.length > 1
    ? sortedWines[1].name
    : sortedWines.length === 1
    ? sortedWines[0].name
    : null;
};

module.exports = chosenWine;
