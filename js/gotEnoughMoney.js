// Problem# 201
// Create a function that returns any of the items you can afford in the store with the money you have in your wallet.
// Sort the list in alphabetical order.
// https://edabit.com/challenge/Qifo5G2hgWXWXLegi

const priceToNum = (price) => Number(price.replace("$", ""));

const itemsPurchased = (store, wallet) => {
  const items = Object.entries(store).reduce((acc, curr) => {
    const [name, price] = curr;

    if (priceToNum(price) <= priceToNum(wallet)) {
      acc.push(name);
    }

    return acc;
  }, []);

  return items.length ? items.sort() : "Nothing";
};

module.exports = itemsPurchased;
