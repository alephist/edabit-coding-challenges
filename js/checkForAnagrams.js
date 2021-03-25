// Problem# 230
// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.
// https://edabit.com/challenge/FPamWj3Ky7ep9ApBz

const sanitizeString = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");

const isAnagram = (s1, s2) => sanitizeString(s1) === sanitizeString(s2);

module.exports = isAnagram;
