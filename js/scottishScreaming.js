// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel
// with an "e". Additionally, it is being screamed, so it should be in block capitals.
// Create a function that takes a string and returns a string.
// https://edabit.com/challenge/eRuGNqijDdFpLsW5K

const toScottishScreaming = (str) => str.toUpperCase().replace(/[AIOU]/g, "E");

module.exports = toScottishScreaming;
