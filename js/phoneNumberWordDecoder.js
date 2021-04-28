// Problem# 297
// Create a program that converts a phone number with letters to one with only numbers.
// Number	Letter
// 0	none
// 1	none
// 2	ABC
// 3	DEF
// 4	GHI
// 5	JKL
// 6	MNO
// 7	PQRS
// 8	TUV
// 9	WXYZ
// https://edabit.com/challenge/LhMQuGstm7EENosjw

const changeCharToNum = (char) => {
  switch (char) {
    case "A":
    case "B":
    case "C":
      return 2;

    case "D":
    case "E":
    case "F":
      return 3;

    case "G":
    case "H":
    case "I":
      return 4;

    case "J":
    case "K":
    case "L":
      return 5;

    case "M":
    case "N":
    case "O":
      return 6;

    case "P":
    case "Q":
    case "R":
    case "S":
      return 7;

    case "T":
    case "U":
    case "V":
      return 8;

    case "W":
    case "X":
    case "Y":
    case "Z":
      return 9;
  }
};

const textToNum = (phone) => phone.replace(/[A-Z]/g, changeCharToNum);

module.exports = textToNum;
