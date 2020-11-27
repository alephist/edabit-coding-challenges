// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed.
// This is calculated by subtracting the number of downvotes from upvotes.
// https://edabit.com/challenge/654ABGmNS5GqscE8C

const getVoteCount = ({ upvotes, downvotes }) => upvotes - downvotes;

module.exports = getVoteCount;
