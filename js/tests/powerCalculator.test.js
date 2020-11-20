const circuitPower = require("../powerCalculator");

const data = [
  [110, 3, 330],
  [230, 10, 2300],
  [480, 20, 9600]
];

describe("circuitPower", () => {
  describe("Calculate power using given voltage and current values", () => {
    test.each(data)("%i x %i = %i", (voltage, current, power) => {
      var actualPower = circuitPower(voltage, current);

      expect(actualPower).toEqual(power);
    });
  });
});
