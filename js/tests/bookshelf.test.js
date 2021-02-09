const Book = require("../bookshelf");

const PP = new Book("Pride and Prejudice", "Jane Austen");
const H = new Book("Hamlet", "William Shakespeare");
const WP = new Book("War and Peace", "Leo Tolstoy");

describe("Book class", () => {
  test("Should return book title", () => {
    expect(PP.title).toEqual("Pride and Prejudice");
    expect(H.title).toEqual("Hamlet");
    expect(WP.title).toEqual("War and Peace");
  });

  test("Should return book author", () => {
    expect(PP.author).toEqual("Jane Austen");
    expect(H.author).toEqual("William Shakespeare");
    expect(WP.author).toEqual("Leo Tolstoy");
  });

  test("Should return book title body", () => {
    expect(PP.getTitle()).toEqual("Title: Pride and Prejudice");
    expect(H.getTitle()).toEqual("Title: Hamlet");
    expect(WP.getTitle()).toEqual("Title: War and Peace");
  });

  test("Should return book author body", () => {
    expect(PP.getAuthor()).toEqual("Author: Jane Austen");
    expect(H.getAuthor()).toEqual("Author: William Shakespeare");
    expect(WP.getAuthor()).toEqual("Author: Leo Tolstoy");
  });
});
