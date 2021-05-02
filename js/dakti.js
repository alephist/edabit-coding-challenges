// Problem# 306
// Juan loves the Dakti song and wants to memorize the chorus of the song. His friend sent him the chorus in phrases,
// but the phrases are somewhat strange; they do not have an order and they have numbers.
// His friend helps Juan organize the chorus of the song.
// Use RegEx, natural sorting, sorting, or lambda functions; your imagination has no limits.
// First, organize the words based on the numbers they have, then delete the numbers once they are organized.
// https://edabit.com/challenge/vuSPSnFC32qEbQBdv

const getNumValue = (word) => word.match(/[0-9]/g)[0];

const compareNum = (wordA, wordB) => {
  let numA = getNumValue(wordA);
  let numB = getNumValue(wordB);

  if (numA > numB) return 1;
  if (numA < numB) return -1;
  return 0;
};

const removeNum = (word) => word.replace(/[0-9]/g, "");

const dakti = (str) => str.split(" ").sort(compareNum).map(removeNum).join(" ");

module.exports = dakti;
