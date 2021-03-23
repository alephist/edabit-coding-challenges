// Problem# 226
// You have an array of strings, each consisting of a book title and an author's name.
// To illustrate:
// [
//   ["   Death of a Salesman - Arthur Miller    "],
//   ["   Macbeth - William Shakespeare    "],
//   ["    A Separate Peace - John Knowles     "],
//   [" Lord of the Flies - William Golding"],
//   ["A Tale of Two Cities - Charles Dickens"]
// ]
// Create a function that takes an array like the one above and transforms it into the same format as the one below:
// [
//   ["Death of a Salesman", "Arthur Miller"],
//   ["Macbeth", "William Shakespeare"],
//   ["A Separate Peace", "John Knowles"],
//   ["Lord of the Flies", "William Golding"],
//   ["A Tale of Two Cities", "Charles Dickens"]
// ]
// https://edabit.com/challenge/5vz5mrd7BTd7Q7XSz

const tidyBooks = (books) =>
  books.map((book) => book.trim()).map((book) => book.split(" - "));

module.exports = tidyBooks;
