// Problem# 244
// Given a simple math expression as a string, neatly format it as an equation.
// https://edabit.com/challenge/QtEsWc3qmxWReBNmK

const formatMath = (expr) => {
  const [num1, operation, num2] = expr.split(" ");
  let result = 0;

  switch (operation) {
    case "+":
      result = Number(num1) + Number(num2);
      break;

    case "-":
      result = Number(num1) - Number(num2);
      break;

    case "x":
      result = Number(num1) * Number(num2);
      break;

    case "/":
      result = Number(num1) / Number(num2);
      break;
  }

  return `${expr} = ${result}`;
};

module.exports = formatMath;
