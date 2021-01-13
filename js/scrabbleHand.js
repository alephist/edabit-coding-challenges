// Given an array of scrabble tiles, create a function that outputs the maximum possible score a player
// can achieve by summing up the total number of points for all the tiles in their hand.
// Each hand contains 7 scrabble tiles.
// https://edabit.com/challenge/i6YqzHcSiPiEQKjeX

const maximunScore = (tileHand) =>
  tileHand.map((tile) => tile.score).reduce((a, b) => a + b, 0);

module.exports = maximunScore;
