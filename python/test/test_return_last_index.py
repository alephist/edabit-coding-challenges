import unittest

from typing import Any, Tuple

from return_last_index import ItemList, last_ind

test_values: Tuple[Tuple[ItemList, Any]] = (
    ([0, 4, 19, 34, 50, -9, 2], 2),
    (["Hello", "There", "Python", "User"], "User"),
    ([], None),
    ([True, False, False, True], True),
    ([(5, 0), (0, 5, 6, 7), (3, 5, 67, 7), (0, -9, 3, 45, 5)], (0, -9, 3, 45, 5)),
    ("Python is a great programming langauge.", "."),
    (["H", "E", "L", "L", "O"], "O"),
    ("The quick brown fox jumped over the lazy dog", "g"),
    ([{"name": "batman"}, {"kids": "none"}, {
     "parents": "also none"}], {"parents": "also none"}),
    ("", None)
)


class ReturnLastIndexTestCase(unittest.TestCase):
    def test_return_last_item_of_input_list_or_string(self):
        for lst, expected in test_values:
            with self.subTest():
                self.assertEqual(last_ind(lst), expected)


if __name__ == '__main__':
    unittest.main()
