// Problem# 222
// Write a function that takes a credit card number and only displays the last four characters.
// The rest of the card number must be replaced by ************.
// https://edabit.com/challenge/rtpvAqFT3koqMoFCJ

const cardHide = (card) => {
  const lastFourDigits = card.slice(-4);

  return lastFourDigits.padStart(card.length, "*");
};

module.exports = cardHide;
