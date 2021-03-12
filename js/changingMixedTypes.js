// Problem# 208
// Create a function that changes all the elements in an array as follows:
// Add 1 to all even integers, nothing to odd integers.
// Concatenates "!" to all strings and make the first letter of the word a capital letter.
// Changes all boolean values to its opposite.
// https://edabit.com/challenge/FY8DmJXbQXL3yugGC

const changeTypes = (arr) =>
  arr.map((item) => {
    if (typeof item === "number") {
      return item % 2 === 0 ? item + 1 : item;
    } else if (typeof item === "string") {
      return `${item.substring(0, 1).toUpperCase()}${item.substring(1)}!`;
    } else if (typeof item === "boolean") {
      return !item;
    }
  });

module.exports = changeTypes;
