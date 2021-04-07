// Problem# 256
// Given a lottery ticket (ticket), represented by an array of 2-value arrays,
// create a function to find out if you've won the jackpot.
// To do this, you must first count the 'mini-wins' on your ticket.
// Each subarray has both a string and a number within it. If the character code of any of the characters in the
// string matches the number, you get a mini-win. Note you can only have one mini-win per subarray.
// Once you have counted all of your mini-wins, compare that number to the other input provided (win).
// If your number of mini-wins is more than or equal to win, return Winner!. Else, return Loser!.
// https://edabit.com/challenge/jxxWvhfiv67P2zbTa

const lottery = (ticket, win) => {
  const miniWins = ticket.reduce((acc, curr) => {
    const [char, num] = curr;

    if ([...char].some((c) => c.charCodeAt() === num)) acc++;

    return acc;
  }, 0);

  return miniWins >= win ? "Winner!" : "Loser!";
};

module.exports = lottery;
