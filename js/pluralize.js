// Problem# 282
// Given a list of words in the singular form, return a set of those words in the plural form if they appear
// more than once in the list.
// https://edabit.com/challenge/ahAX627M3Y26tij9y

const wordCountList = (arr) =>
  arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }

    return acc;
  }, {});

const pluralize = (arr) =>
  Object.entries(wordCountList(arr)).map(([key, val]) =>
    val > 1 ? `${key}s` : key
  );

module.exports = pluralize;
