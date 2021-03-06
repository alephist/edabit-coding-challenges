const sortBooksByAuthorLastName = require("../sortAuthorsLastName");

const data = [
  [
    [
      { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
      { name: "Warcross", rating: "13+", author: "Marie Lu" },
      { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" }
    ],
    [
      { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
      { name: "Warcross", rating: "13+", author: "Marie Lu" },
      { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" }
    ]
  ],
  [
    [
      { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" },
      { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" }
    ],
    [
      { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" },
      { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" }
    ]
  ],
  [
    [
      { name: "The Selection", rating: "13+", author: "Kiera Cass" },
      { name: "Warcross", rating: "13+", author: "Marie Lu" },
      {
        name: "The School for Good and Evil",
        rating: "11+",
        author: "Soman Chainani"
      },
      { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" }
    ],
    [
      { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" },
      { name: "The Selection", rating: "13+", author: "Kiera Cass" },
      {
        name: "The School for Good and Evil",
        rating: "11+",
        author: "Soman Chainani"
      },
      { name: "Warcross", rating: "13+", author: "Marie Lu" }
    ]
  ]
];

describe("sortBooksByAuthorLastName", () => {
  test("Return sorted books in alphabetical order by author's last name", () => {
    data.forEach(([books, result]) =>
      expect(sortBooksByAuthorLastName(books)).toEqual(result)
    );
  });
});
