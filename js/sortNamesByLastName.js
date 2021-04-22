// Problem# 285
// Create a function that takes an array of names in the format "First Name Last Name" (e.g. "John Doe"),
// and returns an array of these names sorted by the length of their last names.
// If the length of multiple last names are the same, then proceed to sort alphabetically by last name.
// https://edabit.com/challenge/PcSNdgbfiDf9JYJjz

const getLastName = (fullName) => fullName.split(" ")[1];

const getLastNameLength = (name) => getLastName(name).length;

const getLastNameFirstLetterASCII = (name) => getLastName(name).charCodeAt();

const lastNameLensort = (names) =>
  names
    .sort(
      (a, b) => getLastNameFirstLetterASCII(a) - getLastNameFirstLetterASCII(b)
    )
    .sort((a, b) => getLastNameLength(a) - getLastNameLength(b));

module.exports = lastNameLensort;
