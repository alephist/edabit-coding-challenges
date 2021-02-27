// Problem# 183
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.
// https://edabit.com/challenge/niTEsddTdE4gs4YGX

const transformUpvotes = (str) =>
  str
    .split(" ")
    .map((item) =>
      item.endsWith("k") ? Number(item.replace("k", "")) * 1000 : Number(item)
    );

module.exports = transformUpvotes;
