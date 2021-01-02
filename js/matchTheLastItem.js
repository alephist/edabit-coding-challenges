// Create a function that takes an array of items and checks if the last item matches
// the rest of the array concatenated together.
// https://edabit.com/challenge/jbR9NupEL8zAZkbKx

const matchLastItem = (arr) =>
  arr.slice(0, arr.length - 1).join("") === arr[arr.length - 1];

module.exports = matchLastItem;
