// Problem# 190
// Create a function that takes an array of booleans that represent whether or not a player has logged into a game
// that day. Output the longest streak of consecutive logged in days.
// https://edabit.com/challenge/wi65FEnQe6rYguxMQ

const longestStreak = (arr) => {
  const streaks = arr.reduce(
    (acc, curr) => {
      if (curr) acc[acc.length - 1]++;
      else acc.push(0);

      return acc;
    },
    [0]
  );

  return Math.max(...streaks);
};

module.exports = longestStreak;
