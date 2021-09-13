"""
Book Shelf

Create a Book class that has two attributes:

.title
.author
and two methods:

A method named .get_title() that returns: "Title: " + the instance title.
A method named .get_author() that returns: "Author: " + the instance author.
and instantiate this class by creating 3 new books:

Pride and Prejudice - Jane Austen (PP)
Hamlet - William Shakespeare (H)
War and Peace - Leo Tolstoy (WP)
Name the new instances should be PP, H, and WP, respectively.

For instance, if I instantiated the following book using this Book class:
Harry Potter - J.K. Rowling (HP)

https://edabit.com/challenge/uK4Dw7Pise5uCfKqo
"""


class Book:
    def __init__(self, title: str, author: str) -> None:
        self.__title = title
        self.__author = author

    @property
    def title(self):
        return self.__title

    @property
    def author(self):
        return self.__author

    def get_title(self):
        return f"Title: {self.title}"

    def get_author(self):
        return f"Author: {self.author}"
