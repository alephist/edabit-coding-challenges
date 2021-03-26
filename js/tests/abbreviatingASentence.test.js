const abbreviate = require("../abbreviatingASentence");

describe("abbreviate", () => {
  test("Return first letter of each word capitalized and return as a single string", () => {
    expect(abbreviate("do it yourself", 2)).toEqual("DIY");
    expect(
      abbreviate("attention AND deficit OR hyperactivity THE disorder")
    ).toEqual("ADHD");
    expect(abbreviate("the acronym of long word lengths", 5)).toEqual("AL");
    expect(abbreviate("laugh out loud")).toEqual("LL");
    expect(abbreviate("Keep It Simple Stupid")).toEqual("KSS");
    expect(abbreviate("laugh out loud", 3)).toEqual("LOL");
    expect(abbreviate("Keep It Simple Stupid", 2)).toEqual("KISS");
  });
});
