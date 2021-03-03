// Problem# 191
// As you complete questions on Edabit, you gain experience points depending on the difficulty of the question.
// The points for each difficulty are as follows:
// Difficulty	Experience Points
// Very Easy	      5XP
// Easy	             10XP
// Medium	         20XP
// Hard	             40XP
// Very Hard	     80XP
// Given an object of how many questions a person has completed of each difficulty, return how many
// experience points they'll have.
// https://edabit.com/challenge/yX9LqcQ43nEXo5GS2

const calculatePoints = ([key, value]) => {
  switch (key) {
    case "Very Easy":
      return value * 5;

    case "Easy":
      return value * 10;

    case "Medium":
      return value * 20;

    case "Hard":
      return value * 40;

    case "Very Hard":
      return value * 80;
  }
};

const getXP = (obj) => {
  const totalXP = Object.entries(obj)
    .map(calculatePoints)
    .reduce((acc, curr) => acc + curr, 0);

  return `${totalXP}XP`;
};

module.exports = getXP;
