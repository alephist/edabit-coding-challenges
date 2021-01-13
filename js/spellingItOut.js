// Create a function which takes in a word and spells it out, by consecutively adding letters
// until the full word is completed.
// https://edabit.com/challenge/Akgh37c6dccEsNBt6

const spelling = (str) => {
  const letters = [];

  for (let i = 0; i < str.length; i++) {
    letters.push(str.substring(0, i + 1));
  }

  return letters;
};

module.exports = spelling;
