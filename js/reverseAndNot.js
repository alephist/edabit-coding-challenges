// Problem# 218
// Write a function that takes an integer i and returns an integer with the integer backwards followed by
// the original integer.
// https://edabit.com/challenge/moK78CirzYbqk6g3z

const reverseAndNot = (i) => {
  const reversedInt = [...i.toString()].reverse().join("");

  return Number(`${reversedInt}${i}`);
};

module.exports = reverseAndNot;
