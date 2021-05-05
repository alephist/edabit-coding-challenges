// Problem# 311
// Create a function that takes in a sentence and returns a running list of consonants per word and vowels per word.
// https://edabit.com/challenge/m9pkGmuoEWsdHrNHi

const getVowels = (word) => {
  const matches = word.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
};

const getConsonants = (word) => {
  const matches = word.match(/(?![aeiou])[a-z]/gi);

  return matches ? matches.length : 0;
};

const stringCode = (sentence) => {
  const [consonantsPerWord, vowelsPerWord] = sentence.split(" ").reduce(
    (acc, word) => {
      acc[0].push(getConsonants(word));
      acc[1].push(getVowels(word));

      return acc;
    },
    [[], []]
  );

  return [consonantsPerWord.join(" "), vowelsPerWord.join(" ")];
};

module.exports = stringCode;
