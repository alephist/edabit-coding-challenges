const Name = require("../nameClasses");

const a1 = new Name("john", "SMITH");
const a2 = new Name("sARah", "fRolliE");

describe("Name class", () => {
  test("Should return fname", () => {
    expect(a1.fname).toEqual("John");
    expect(a2.fname).toEqual("Sarah");
  });

  test("Should return lname", () => {
    expect(a1.lname).toEqual("Smith");
    expect(a2.lname).toEqual("Frollie");
  });

  test("Should return fullname", () => {
    expect(a1.fullname).toEqual("John Smith");
    expect(a2.fullname).toEqual("Sarah Frollie");
  });

  test("Should return initials", () => {
    expect(a1.initials).toEqual("J.S");
    expect(a2.initials).toEqual("S.F");
  });
});
