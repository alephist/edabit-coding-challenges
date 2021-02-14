const User = require("../countNumberOfInstances");

describe("User class", () => {
  test("Should return number of users and the username added", () => {
    // Initial
    expect(User.userCount).toEqual(0);

    // First User
    const u1 = new User("johnsmith10");
    expect(User.userCount).toEqual(1);
    expect(u1.username).toEqual("johnsmith10");

    // Scond User
    const u2 = new User("marysue1989");
    expect(User.userCount).toEqual(2);
    expect(u2.username).toEqual("marysue1989");

    // Third User
    const u3 = new User("milan_rodrick");
    expect(User.userCount).toEqual(3);
    expect(u3.username).toEqual("milan_rodrick");

    // Fourth User
    const u4 = new User("joshua_senoron");
    expect(User.userCount).toEqual(4);
    expect(u4.username).toEqual("joshua_senoron");

    // Fifth User
    const u5 = new User("LuckyLootCrate123");
    expect(User.userCount).toEqual(5);
    expect(u5.username).toEqual("LuckyLootCrate123");
  });
});
