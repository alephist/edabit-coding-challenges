// Problem# 204
// In BlackJack, cards are counted with -1, 0, 1 values:
// 2, 3, 4, 5, 6 are counted as +1
// 7, 8, 9 are counted as 0
// 10, J, Q, K, A are counted as -1
// Create a function that counts the number and returns it from the array of cards provided.
// https://edabit.com/challenge/3kzhTP7nEwcaKP82H

const count = (deck) =>
  deck.reduce((total, card) => {
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        total++;
        break;

      case 7:
      case 8:
      case 9:
        total += 0;
        break;

      default:
        total += -1;
    }

    return total;
  }, 0);

module.exports = count;
