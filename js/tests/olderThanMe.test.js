const Person = require("../olderThanMe");

describe("Person class", () => {
  describe("compareAge", () => {
    test("Return comparison message", () => {
      const p1 = new Person("Samuel", 24);
      const p2 = new Person("Joel", 36);
      const p3 = new Person("Lily", 24);

      expect(p1.compareAge(p2)).toEqual("Joel is older than me.");
      expect(p1.compareAge(p3)).toEqual("Lily is the same age as me.");

      expect(p2.compareAge(p1)).toEqual("Samuel is younger than me.");
      expect(p2.compareAge(p3)).toEqual("Lily is younger than me.");

      expect(p3.compareAge(p1)).toEqual("Samuel is the same age as me.");
      expect(p3.compareAge(p2)).toEqual("Joel is older than me.");
    });
  });
});
