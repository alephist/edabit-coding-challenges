// Create a function that takes an object as an argument and returns a string with facts about the city.
// The city facts will need to be extracted from the object's three properties: name, population ,continent
// The string should have the following format: X has a population of Y and is situated in Z
// (where X is the city name, Y is the population and Z is the continent the city is situated in).
// https://edabit.com/challenge/FzDAgSR84zeyRa278

const cityFacts = ({ name, population, continent }) =>
  `${name} has a population of ${population} and is situated in ${continent}`;

module.exports = cityFacts;
