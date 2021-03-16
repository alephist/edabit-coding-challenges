// Problem# 213
// Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or
// descending (desc) order.
// https://edabit.com/challenge/4zCJaqJvEcAmqcb7y

const numToStringArray = (num) => [...num.toString()];

const reorderDigits = (arr, direction) =>
  arr.map((num) => {
    switch (direction) {
      case "asc":
        return Number(numToStringArray(num).sort().join(""));

      default:
        return Number(
          numToStringArray(num)
            .sort((a, b) => b - a)
            .join("")
        );
    }
  });

module.exports = reorderDigits;
