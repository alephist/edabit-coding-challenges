// Problem# 246
// A fruit juice company tags their fruit juices by concatenating the first three letters of the words in a
// flavor's name and its capacity.
// Create a function that creates the product IDs for the variety of fruit juices.
// https://edabit.com/challenge/7DL9criQPMMFTEdpL

const getDrinkID = (flavor, ml) => {
  const letterId = flavor
    .split(" ")
    .map((item) => item.toUpperCase().slice(0, 3))
    .join("");
  const capacityId = ml.replace("ml", "");

  return `${letterId}${capacityId}`;
};

module.exports = getDrinkID;
