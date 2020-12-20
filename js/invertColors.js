// Create a function that inverts the rgb values of a given tuple.
// https://edabit.com/challenge/5oyDEx24RC8qJxDRk

const colorInvert = (rgb) => rgb.map((num) => 255 - num);

module.exports = colorInvert;
