// Problem# 299
// Today you volunteered as a librarian. You were given an array of objects, each one containing different book information.
// You need to sort the objects in alphabetical order of the author's last name.
// https://edabit.com/challenge/vtFsh5CzFep6b9gDf

const sortBooksByAuthorLastName = (books) =>
  books.sort((a, b) => {
    let lastNameA = a.author.split(" ")[1];
    let lastNameB = b.author.split(" ")[1];

    if (lastNameA > lastNameB) return 1;
    if (lastNameA < lastNameB) return -1;

    return 0;
  });

module.exports = sortBooksByAuthorLastName;
