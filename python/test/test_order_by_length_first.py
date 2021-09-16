import unittest

from typing import List, Tuple

from order_by_length_first import make_grlex

test_values: Tuple[Tuple[List[str], List[str]]] = (
    (["small", "big"], ["big", "small"]),
    (["big", "cat", "ran", "for", "the", "fat", "rat"],
     ["big", "cat", "fat", "for", "ran", "rat", "the"]),
    (["this", "is", "a", "small", "test"], ["a", "is", "test", "this", "small"]),
    (["let", "us", "try", "some", "long", "test", "to", "see", "if", "this", "works", "as", "it", "should"], [
     "as", "if", "it", "to", "us", "let", "see", "try", "long", "some", "test", "this", "works", "should"])
)


class OrderByLengthFirstTestCase(unittest.TestCase):
    def test_sort_words_by_length_then_alphabetically(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(make_grlex(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
