import unittest

from typing import List, Tuple

from invert_list import invert_list

test_values: Tuple[Tuple[List[int], List[int]]] = (
    ([1, 2, 3, 4, 5], [-1, -2, -3, -4, -5]),
    ([1, -2, 3, -4, 5], [-1, 2, -3, 4, -5]),
    ([], []),
    ([0], [0])
)


class InvertListTestCase(unittest.TestCase):
    def test_invert_items_in_list(self):
        for lst, inverted_lst in test_values:
            with self.subTest():
                self.assertEqual(invert_list(lst), inverted_lst)


if __name__ == '__name__':
    unittest.main()
