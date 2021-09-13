import unittest

from typing import Tuple

from bookshelf import Book

test_values: Tuple[Tuple[Book, str, str, str, str]] = (
    (Book("Pride and Prejudice", "Jane Austen"), "Pride and Prejudice",
     "Jane Austen", "Title: Pride and Prejudice", "Author: Jane Austen"),
    (Book("Hamlet", "William Shakespeare"), "Hamlet",
     "William Shakespeare", "Title: Hamlet", "Author: William Shakespeare"),
    (Book("War and Peace", "Leo Tolstoy"), "War and Peace",
     "Leo Tolstoy", "Title: War and Peace", "Author: Leo Tolstoy")
)


class BookshelfTestCase(unittest.TestCase):
    def test_return_title_author_and_title_and_author_message(self):
        for book, expected_title, expected_author, expected_title_message, expected_author_message in test_values:
            with self.subTest():
                self.assertEqual(book.title, expected_title)
                self.assertEqual(book.author, expected_author)
                self.assertEqual(book.get_title(), expected_title_message)
                self.assertEqual(book.get_author(), expected_author_message)


if __name__ == '__main__':
    unittest.main()
