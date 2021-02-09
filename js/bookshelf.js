// Problem# 155
// Create a Book constructor that has two properties : Title, Author
// and two methods:
// A method named getTitle that returns: "Title: " + the instance title.
// A method named getAuthor that returns: "Author: " + the instance author.
// https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getTitle() {
    return `Title: ${this.title}`;
  }

  getAuthor() {
    return `Author: ${this.author}`;
  }
}

module.exports = Book;
