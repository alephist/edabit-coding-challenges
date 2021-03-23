const tidyBooks = require("../tidyTitleAndAuthorStrings");

const data = [
  [
    [
      "     The Catcher in the Rye - J. D. Salinger    ",
      "    Brave New World - Aldous Huxley   ",
      "    Of Mice and Men - John Steinbeck    "
    ],
    [
      ["The Catcher in the Rye", "J. D. Salinger"],
      ["Brave New World", "Aldous Huxley"],
      ["Of Mice and Men", "John Steinbeck"]
    ]
  ],
  [
    [
      "     The Grapes of Wrath - John Steinbeck    ",
      "    Great Expectations - Charles Dickens   ",
      "    The Scarlet Letter - Nathaniel Hawthorne    "
    ],
    [
      ["The Grapes of Wrath", "John Steinbeck"],
      ["Great Expectations", "Charles Dickens"],
      ["The Scarlet Letter", "Nathaniel Hawthorne"]
    ]
  ]
];

describe("tidyBooks", () => {
  describe("Return array of books with book title and author split", () => {
    test.each(data)("tidyBooks(%p) = %o", (books, result) => {
      let actual = tidyBooks(books);

      expect(actual).toEqual(result);
    });
  });
});
