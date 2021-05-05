// Problem# 312
// You're able to call numbers like 1-800-flowers which replace the characters with the associated numbers on a cellular device keyboard.
// This is your task:
// Create a function that takes a string as argument.
// Convert all letters to numbers by using a cellular device keyboard as reference and leave any other characters in.
// Return a string containing the argument with replaced letters.
// Conversion
// abc  = 2
// def  = 3
// ghi  = 4
// jkl  = 5
// mno  = 6
// pqrs = 7
// tuv  = 8
// wxyz = 9
// https://edabit.com/challenge/2Ybd7gvXJQd5h5CMH

const letterToNum = (letter) => {
  switch (letter) {
    case "a":
    case "b":
    case "c":
      return 2;

    case "d":
    case "e":
    case "f":
      return 3;

    case "g":
    case "h":
    case "i":
      return 4;

    case "j":
    case "k":
    case "l":
      return 5;

    case "m":
    case "n":
    case "o":
      return 6;

    case "p":
    case "q":
    case "r":
    case "s":
      return 7;

    case "t":
    case "u":
    case "v":
      return 8;

    case "w":
    case "x":
    case "y":
    case "z":
      return 9;
  }
};

const dial = (str) => str.toLowerCase().replace(/[a-z]/g, letterToNum);

module.exports = dial;
