const addition = require("../sumofTwoNumbers");

const data = [
  [2, 3, 5],
  [-3, -6, -9],
  [7, 3, 10],
  [88, 2, 90]
];

test.each(data)("Add %i + %i", (a, b, expected) => {
  var actual = addition(a, b);

  expect(actual).toBe(expected);
});
