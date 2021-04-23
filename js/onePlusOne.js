// Problem# 287
// Create a function that outputs the result of a math expression in words.
// https://edabit.com/challenge/ci52KkmCATSCbSbTP

const numList = {
  zero: 0,
  one: 1,
  two: 2
};

const simplifyExpression = (num1, operation, num2) => {
  switch (operation) {
    case "plus":
      return numList[num1] + numList[num2];

    case "minus":
      return numList[num1] - numList[num2];
  }
};

const wordedMath = (expr) => {
  const [num1, operation, num2] = expr.toLowerCase().split(" ");

  const numAnswer = simplifyExpression(num1, operation, num2);

  const wordedAnswer = Object.keys(numList).find(
    (key) => numList[key] === numAnswer
  );

  return `${wordedAnswer.substr(0, 1).toUpperCase()}${wordedAnswer.substr(1)}`;
};

module.exports = wordedMath;
