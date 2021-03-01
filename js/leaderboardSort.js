// Problem# 188
// Given an array of users, each defined by an object with the following properties: name, score, reputation
// create a function that sorts the array to form the correct leaderboard.
// The leaderboard takes into consideration the score of each user of course, but an emphasis is put on their
// reputation in the community, so to get the trueScore, you should add the reputation multiplied by 2 to the score.
// Once you know the trueScore of each user, sort the array according to it in descending order.
// https://edabit.com/challenge/nTZqZmAkLrjRx9PcK

const getTrueScore = ({ score, reputation }) => reputation * 2 + score;

const leaderboards = (users) =>
  users.sort((a, b) => getTrueScore(b) - getTrueScore(a));

module.exports = leaderboards;
