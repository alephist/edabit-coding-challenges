const {
  BasicPlan,
  StandardPlan,
  PremiumPlan
} = require("../videoStreamingPlans");

const data = [
  [BasicPlan.canStream, true],
  [BasicPlan.canDownload, true],
  [BasicPlan.numOfDevices, 1],
  [BasicPlan.hasSD, true],
  [BasicPlan.hasHD, false],
  [BasicPlan.hasUHD, false],
  [BasicPlan.price, "$8.99"],
  [StandardPlan.canStream, true],
  [StandardPlan.canDownload, true],
  [StandardPlan.numOfDevices, 2],
  [StandardPlan.hasSD, true],
  [StandardPlan.hasHD, true],
  [StandardPlan.hasUHD, false],
  [StandardPlan.price, "$12.99"],
  [PremiumPlan.canStream, true],
  [PremiumPlan.canDownload, true],
  [PremiumPlan.numOfDevices, 4],
  [PremiumPlan.hasSD, true],
  [PremiumPlan.hasHD, true],
  [PremiumPlan.hasUHD, true],
  [PremiumPlan.price, "$15.99"]
];

describe("Return correct values from BasicPlan, StandardPlan and PremiumPlan classes", () => {
  test.each(data)("%p = %p", (actual, result) => {
    expect(actual).toEqual(result);
  });
});
