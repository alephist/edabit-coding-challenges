// Create a function that takes an array of numbers arr, a string str
// and return an array of numbers as per the following rules:
// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.
// https://edabit.com/challenge/vsoQiYJXRANcYrX3Z

const ascDesNone = (arr, str) => {
  switch (str) {
    case "Asc":
      return arr.sort((a, b) => a - b);

    case "Des":
      return arr.sort((a, b) => b - a);

    default:
      return arr;
  }
};

module.exports = ascDesNone;
