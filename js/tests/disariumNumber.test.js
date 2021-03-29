const isDisarium = require("../disariumNumber");

const [numVector, resVector] = [
  [6, 75, 135, 466, 372, 175, 1, 696, 876, 89, 518, 598],
  [true, false, true, false, false, true, true, false, false, true, true, true]
];

describe("isDisarium", () => {
  test("Return boolean if a number is a Disarium Number", () => {
    for (let i = 0; i < numVector.length; i++) {
      expect(isDisarium(numVector[i])).toEqual(resVector[i]);
    }
  });
});
