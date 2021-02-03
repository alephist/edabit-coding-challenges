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

// Part 12
// Problem# 136
// The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka // bottles. Given an object with alcoholic drinks and a number, return a string with the name of the
// Rammstein bottle that matches the given number.
// https://edabit.com/challenge/paMpZoEJ6gr4feMS3

const getVodkaBottle = (obj, num) => {
  const drinks = Object.keys(obj);

  return drinks.find((key) => key.includes("Rammstein") && obj[key] === num);
};

// Part 13
// Problem# 137
// The insurance guy tells you he needs an updated list of the stolen goods, and surely only to annoy you, he adds,
// "in reverse alphabetical order". Given an object with the stolen items, return a new object with the list in
// reverse alphabetical order.
// https://edabit.com/challenge/qrb9Xaapq9b8nstLe

const sortList = (obj) =>
  Object.keys(obj)
    .reverse()
    .reduce((list, key) => {
      list[key] = obj[key];
      return list;
    }, {});

// Part 14
// Problem# 138
// You call your spouse in anger and a "little" argument takes place. Count the total amount of adjectives used.
// Given an object with a list of adjectives, return the total amount of adjectives used.
// https://edabit.com/challenge/NkMTBCxMkt4meHpa4

const totalAmountAdjectives = (obj) => Object.values(obj).length;

// Part 15
// Problem# 139
// To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.
// Given an object that contains several adjectives as values, return a new object where you count the ocurrences
// of each adjective.
// https://edabit.com/challenge/Mwryyhy2e8Gk9yrCh

const countNumberOfOccurences = (obj) =>
  Object.values(obj).reduce((list, adjective) => {
    if (adjective in list) {
      list[adjective]++;
    } else {
      list[adjective] = 1;
    }

    return list;
  }, {});

// Part 16
// Problem# 140
// And who cursed the most in the fight between you and your spouse?
// Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed
// the most: If you, return "ME!" If your spouse, return "SPOUSE!" If a draw, return "DRAW!"
// https://edabit.com/challenge/SvodRRbyv7g3LxZsK

const determineWhoCursedTheMost = (obj) => {
  const rounds = Object.values(obj);
  const totalMe = rounds.reduce((acc, curr) => acc + curr.me, 0);
  const totalSpouse = rounds.reduce((acc, curr) => acc + curr.spouse, 0);

  return totalMe === totalSpouse
    ? "DRAW!"
    : totalMe > totalSpouse
    ? "ME!"
    : "SPOUSE!";
};

// Part 17
// Problem# 141
// The fight between you and your spouse is over. Based on your perception of how the fight went, determine who won.
// Given an object with three rounds, with nested objects as your points per round, determine the winner by counting
// who won the most rounds. The winner of the round is whoever scored the most points in that round.
// Draws are possible, both in rounds as in the final result.
// If you won more rounds than your spouse, return "ME!", if your spouse won more rounds, return "SPOUSE!"
// If you are tied, return "NOBODY!"
// https://edabit.com/challenge/Zou4ggX2D9w39wJrG

const determineWinnerOfFight = (obj) => {
  const [me, spouse] = Object.values(obj).reduce(
    (acc, curr) => {
      if (curr.me > curr.spouse) {
        acc[0]++;
      } else if (curr.me < curr.spouse) {
        acc[1]++;
      }

      return acc;
    },
    [0, 0]
  );

  return me === spouse ? "NOBODY!" : me > spouse ? "ME!" : "SPOUSE!";
};

// Part 18
// Problem# 142
// The police call. They need a more detailed list of the stolen goods.
// You are given an array with nested arrays that represent each room in your mansion where the goods were stolen.
// Each room will have two sub-arrays, one for the stolen items and the other for its values. They always match,
// the stolen item at index 0 is worth the value at index 0 of the values array, the stolen item at index 1 is worth
// the value at index 1, and so forth. Look at the example for a clearer picture.
// Return an object that represents where the goods were stolen from and which goods were stolen from each room
// and their value.
// https://edabit.com/challenge/u8SiTaBmMKCYAfK3J

const makeDetailedList = (arr) =>
  arr.reduce((list, room) => {
    const [roomName, itemNames, itemValues] = room;

    const itemList = {};

    for (let i = 0; i < itemNames.length; i++) {
      itemList[itemNames[i]] = itemValues[i];
    }

    list[roomName] = itemList;

    return list;
  }, {});

// Part 19
// Problem# 143
// The police sends you an electronic statement for you to sign. As you begin to sign, an error pops up.
// Apparently, they sent you a protected document. This challenge is a bit different as the function you are
// given already contains some code that you should not change or remove. Also, don't do a return statement,
// it is already included. Your task is, given an object, prevent changes to that object.
// https://edabit.com/challenge/eQs2yCBnzRZ3dnRKd

const preventChanges = (obj) => {
  Object.freeze(obj);

  obj.noChanges = false;
  obj.signature = "whatever";

  return obj;
};

// Part 20
// Problem# 144
// The police send you the electronic statement again for you to sign. This time you are able to sign it and,
// to speed up bureaucracy, you try to sign for your spouse as well. Unfortunately, the document is still
// protected against new entries.
// This challenge is a bit different as the function you are given already contains some code that you should
// not change or remove. Also, don't use a return statement, it is already included. Your task is, given an object,
// prevent new properties from being added to that object, but you should still be able to change the value of
// the existing properties.
// https://edabit.com/challenge/xRcgQHtfLbxomYb33

const signYourName = (obj) => {
  Object.seal(obj);

  obj.yourSignature = "Whatever";
  obj.spouseSignature = "Nice Try";
  return obj;
};

// Part 21
// Problem# 145
// It's the police again. They need more signatures. You should also sign each room list separately.
// However, the document they sent is incomplete as there is only one room present. As a good citizen that you are,
// you sign it nevertheless.
// This challenge is a bit different as the function you are given already contains some code that you should not
// change or remove. Also, don't use a return statement, it is already included.
// The function receives an object with one nested object as an argument. Your task is:
// on the root object: prevent any kind of changes.
// on the nested object: prevent new properties from being added BUT allow for existing properties to be changed.
// https://edabit.com/challenge/H5rAoCQBjyB4woTPY

const signAgain = (obj) => {
  Object.freeze(obj);
  Object.seal(obj.kitchen);

  obj.signature = "Terminator";
  obj.extraProperty = "not possible";
  obj.kitchen.piano = 1000;
  obj.kitchen.signature = "Rocky Balboa";
  return obj;
};

// Part 22
// Problem# 146
// You finally receive the entire stolen list document from the police. You need to sign at the end of the document
// but also each sub-list corresponding to each room in your house where the items were stolen.
// You are given two arguments, one object with nested objects and a string that corresponds to your name.
// The object already contains several signature properties, one on the root, the others on each nested object.
// Return an object with all containing signature values set to your name.
// https://edabit.com/challenge/xrsiqZKrMoT2skt9i

const signAll = (obj, name) => {
  // Change signature property onroot object
  Object.seal(obj);
  obj.signature = name;

  // Change signature property in nested objects
  Object.entries(obj).forEach(([key, val]) => {
    if (key !== "signature") {
      Object.seal(obj[key]);

      obj[key].signature = name;
    }
  });

  return obj;
};

// Part 23
// Problem# 147
// The insurance guy calls. They were about to pay you all that fortune you've been anxiously waiting for,
// but they detected further irregularities; the list of stolen items is misformatted and appears to contain other
// entries that don't belong there. Find and remove them.
// You receive an object with nested objects with strings as values. Convert their values to number and return an object
// without the entries that evaluate to NaN.
// https://edabit.com/challenge/MregZPPJWSxhXtrNB

const findAndRemove = (obj) =>
  Object.entries(obj).reduce((acc, curr) => {
    const [room, items] = curr;

    const itemsList = {};

    Object.entries(items).forEach(([key, value]) => {
      if (!Number.isNaN(Number(value))) {
        itemsList[key] = Number(value);
      }
    });

    acc[room] = itemsList;

    return acc;
  }, {});

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
  sayWhat,
  getVodkaBottle,
  sortList,
  totalAmountAdjectives,
  countNumberOfOccurences,
  determineWhoCursedTheMost,
  determineWinnerOfFight,
  makeDetailedList,
  preventChanges,
  signYourName,
  signAgain,
  signAll,
  findAndRemove
};
