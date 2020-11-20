const convert = require("../minutesToSeconds");

const data = [
  [6, 360],
  [4, 240],
  [8, 480],
  [60, 3600]
];

test.each(data)("Convert %i minutes to %i seconds", (minutes, expected) => {
  var actual = convert(minutes);

  expect(actual).toBe(expected);
});
