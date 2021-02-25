// Problem# 182
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together.
// A box is represented by an array with three elements: length, width and height.
// https://edabit.com/challenge/Dq8kbbsLYyG9are5Z

const totalVolume = (boxes) =>
  boxes.reduce((volume, box) => {
    const [length, width, height] = box;

    volume += length * width * height;

    return volume;
  }, 0);

module.exports = totalVolume;
