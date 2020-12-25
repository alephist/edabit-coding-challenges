// Write a function that maps files to their extension names.
// https://edabit.com/challenge/8A9E8LdE6zXcmPX3W

const getExtension = (arr) => arr.map((file) => file.split(".")[1]);

module.exports = getExtension;
