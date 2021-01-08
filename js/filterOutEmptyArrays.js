// I am trying to filter out empty arrays from an array. In other words,
// I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]].
// https://edabit.com/challenge/4weFPnpgS2S5aw4aN

const removeEmptyArrays = (arr) => arr.flat();

module.exports = removeEmptyArrays;
