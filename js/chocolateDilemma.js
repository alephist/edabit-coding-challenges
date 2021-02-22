// Problem# 176
// Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].
// Write a function that returns true if the total area of chocolate is the same for each sister.
// https://edabit.com/challenge/SLsJZd8EzW8nDoT5f

const testFairness = (agatha, bertha) => {
  const getTotalArea = (arr) =>
    arr.map(([l, w]) => l * w).reduce((a, b) => a + b, 0);

  const agathaChocolateTotalArea = getTotalArea(agatha);
  const berthaChocolateTotalArea = getTotalArea(bertha);

  return agathaChocolateTotalArea === berthaChocolateTotalArea;
};

module.exports = testFairness;
