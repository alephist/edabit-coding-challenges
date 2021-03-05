// Problem# 195
// Suppose you have a guest list of students and the country they are from, stored as key-value pairs in an object.
// Write a function that takes in a name and returns a name tag that should read:
// "Hi! I'm [name], and I'm from [country]."
// If the name is not in the object, return: "Hi! I'm a guest."
// https://edabit.com/challenge/83sWemMhpG6pScXKp

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
};

const greeting = (name) =>
  GUEST_LIST.hasOwnProperty(name)
    ? `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
    : "Hi! I'm a guest.";

module.exports = greeting;
