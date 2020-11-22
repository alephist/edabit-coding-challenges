// Create a function that takes two integers and checks if they are equal.
// https://edabit.com/challenge/Tbvjwh5GKRbxd3vyD

const isEqual = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") return false;

  return num1 === num2;
};

module.exports = isEqual;
