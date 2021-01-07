// Create a function that takes a string as input and capitalizes a letter if its ASCII code is even
// and returns its lower case version if its ASCII code is odd.
// https://edabit.com/challenge/KPENunE3uhBcmSQ7C

const asciiCapitalize = (str) =>
  [...str]
    .map((ltr, i) =>
      str.charCodeAt(i) % 2 === 0 ? ltr.toUpperCase() : ltr.toLowerCase()
    )
    .join("");

module.exports = asciiCapitalize;
