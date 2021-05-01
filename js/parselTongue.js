// Problem# 303
// Hermione has come up with a precise formula for determining whether or not a phrase was ssspoken by a parssseltongue
// (a reference from the Harry Potter universe; the language of ssserpents and those who can converse with them).
// Each word in a sssentence must contain either:
// Two or more consecutive instances of the letter "s" (i.e. must be together ss..), or...
// Zero instances of the letter "s" by itself
// https://edabit.com/challenge/5Jeq8Cf59KnLLg4Go

const wordIsParselTongue = (word) =>
  new RegExp("(s)\\1", "ig").test(word) || !new RegExp("s", "ig").test(word);

const isParselTongue = (sentence) =>
  sentence.split(" ").every(wordIsParselTongue);

module.exports = isParselTongue;
