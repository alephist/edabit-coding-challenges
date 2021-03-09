// Problem# 202
// You were tasked with making a list of every makeup item your local pharmacy had in stock.
// You created a very long array of each item, with each element having both a name and brand property.
// Now you're looking to simplify the list by combining duplicate items, and adding a count property to everything.
// https://edabit.com/challenge/9ZZ2zGwgPfbAxQa86

const simplifyList = (list) =>
  list.reduce((items, curr) => {
    const existingItem = items.find((item) => item.brand === curr.brand);

    if (existingItem) {
      return items.map((item) =>
        item.brand === curr.brand ? { ...item, count: item.count + 1 } : item
      );
    }

    items.push({ ...curr, count: 1 });

    return items;
  }, []);

module.exports = simplifyList;
