// Problem# 207
// Create a function that counts the number of adverbs in a sentence. An adverb is a word that ends with ly.
// https://edabit.com/challenge/sjeXqkCFvv6qSchtA

const countAdverbs = (sentence) =>
  sentence
    .replace(".", "")
    .split(" ")
    .reduce((count, item) => {
      if (item.replace(",", "").endsWith("ly")) count++;

      return count;
    }, 0);

module.exports = countAdverbs;
