// Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee"
// if the date is October 31, else return "toffee".
// https://edabit.com/challenge/PrRTY8txSSGAteko2

const halloween = (dt) =>
  dt.getMonth() === 9 && dt.getDate() === 31 ? "Bonfire toffee" : "toffee";

module.exports = halloween;
