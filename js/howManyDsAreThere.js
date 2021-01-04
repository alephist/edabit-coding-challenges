// Create a function that counts how many D's are in a sentence.
// https://edabit.com/challenge/JZ7TL5S6Q7CqN6GRS

const countDs = (sentence) => (sentence.match(/d/gi) || "").length;

module.exports = countDs;
