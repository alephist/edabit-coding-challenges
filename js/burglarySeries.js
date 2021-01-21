// Burglary Series

// Part 01
// Problem# 125
// You just returned home to find your mansion has been robbed! Given an object of the stolen items,
// return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".
// https://edabit.com/challenge/pLNavsePxJ87t9Nak

const stolenItems = (obj) =>
  Object.values(obj).reduce((a, b) => a + b, 0) || "Lucky you!";

// Part 02
// Problem# 126
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items,
// return the most expensive item on the list.
// https://edabit.com/challenge/yMEs8bXPyZenPEYLM

const mostExpensiveItem = (obj) => {
  let maxValue = Math.max(...Object.values(obj));

  return Object.keys(obj).filter((key) => obj[key] === maxValue)[0];
};

// Part 03
// Problem# 127
// Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!
// Given an object of the stolen items and a string in lower cases representing
// the name of the pet (e.g. "rambo"), return:
// "Rambo is gone..." if the name is on the list.
// "Rambo is here!" if the name is not on the list.
// https://edabit.com/challenge/FBj5P49wwFzj2Jnfr

const findIt = (obj, name) => {
  let capitalizedName = name.substring(0, 1).toUpperCase() + name.substring(1);

  return `${capitalizedName} ${
    obj.hasOwnProperty(name) ? "is gone..." : "is here!"
  }`;
};

// Part 04
// Problem# 128
// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value
// return an object with that name and value in it (as key-value pairs).
// https://edabit.com/challenge/9KEKJG5PZTFmG3Zau

const addName = (obj, name, value) => Object.assign(obj, { [name]: value });

// Part 05
// Problem# 129
// Time to call your lover to inform what he/she lost in the burglary.
// Given an object of the stolen objects, return the 3rd most expensive item on the list.
// If that is not possible, because there are not enough items, return false.
// https://edabit.com/challenge/3hDDMWvmMQ6pFqqmg

const thirdMostExpensive = (obj) => {
  let thirdMaxValue = Object.values(obj).sort((a, b) => b - a)[2];

  return thirdMaxValue
    ? Object.keys(obj).find((key) => obj[key] === thirdMaxValue)
    : false;
};

// Part 06
// Problem# 130
// You prepare a list to send to the insurance company. As you finish, you notice you misformatted it.
// Given an object with at least one key/value pair, convert all the values to numbers.
// https://edabit.com/challenge/ttuBGpGu7w4Ec3spT

const convertToNumber = (obj) => {
  for (const key in obj) {
    Object.assign(obj, { [key]: Number(obj[key]) });
  }

  return obj;
};

// Part 07
// Problem# 131
// Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.
// https://edabit.com/challenge/cEbhy9eWeNudEuxut

const makeCopy = (obj) => Object.assign({}, obj);

// Part 08
// Problem# 132
// Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania.
// Given an object of the stolen items and an item name, return a copy without that item on the list.
// https://edabit.com/challenge/y4K6Mi7XfaauvoT3u

const removeEntry = (obj, itemName) => {
  const filteredList = Object.entries(obj).filter(
    ([key, val]) => key !== itemName
  );

  return Object.fromEntries(filteredList);
};

// Part 09
// Problem# 133
// The insurance guy calls, the policy you chose doesn't cover values below 5000€, it wouldn't dignify your status you // // said at the time. Given an object with a list of the stolen items, return a copy of that list
// without the values below 5000.
// https://edabit.com/challenge/Cve45maGdj5XtQXgo

const filterValues = (obj) => {
  const filteredList = Object.entries(obj).filter(([key, val]) => val >= 5000);

  return Object.fromEntries(filteredList);
};

// Part 10
// Problem# 134
// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is
// limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse
// for the difference you lost.
// Given an object of the stolen items and a limit, return the difference between the total value of those items
// and the limit of the policy.
// https://edabit.com/challenge/8s2jy9hR2TAeQinKD

const calculateDifference = (obj, limit) => {
  const totalValue = Object.values(obj).reduce((a, b) => a + b, 0);

  return totalValue - limit;
};

// Part 11
// Problem# 135
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all
// and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something
// unintelligible. Find out what you said. Given an object, return a string that concatenates all the values and
// adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or
// end of the string.
// https://edabit.com/challenge/7hrjegxToTSF4zAoM

const sayWhat = (obj) => {
  const wordsArray = Object.values(obj);

  return `${wordsArray.join(" ")} ${wordsArray[1]}`;
};

module.exports = {
  stolenItems,
  mostExpensiveItem,
  findIt,
  addName,
  thirdMostExpensive,
  convertToNumber,
  makeCopy,
  removeEntry,
  filterValues,
  calculateDifference,
  sayWhat
};
