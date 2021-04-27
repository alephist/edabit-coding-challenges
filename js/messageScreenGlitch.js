// Problem# 296
// Your open-plan office building has a scrolling message screen on the far wall.
// One day, you notice that the messages are starting to glitch. Some of the lower case letters are being replaced by
// their position in the alphabet ("a" = 1, "b" = 2, ..., "z" = 26).
// Given the glitched text, return the corrected message.
// https://edabit.com/challenge/eqAbW3AJz7de6gTjr

const convertToLetter = (num) => String.fromCharCode(Number(num) + 96);

const messageGlitch = (txt) => txt.replace(/\d+/g, convertToLetter);

module.exports = messageGlitch;
