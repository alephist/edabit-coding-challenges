// Problem# 253
// Create a function which takes in a number n as input and returns all numbers up to and including n joined
// together in a string. Separate each digit from each other with the character "-".
// https://edabit.com/challenge/9qrjtshZq8L5ATcKt

const joinDigits = (n) => {
  const numArr = [];

  for (let i = 1; i <= n; i++) {
    numArr.push(i);
  }

  return numArr
    .map(String)
    .flatMap((num) => [...num])
    .join("-");
};

module.exports = joinDigits;
