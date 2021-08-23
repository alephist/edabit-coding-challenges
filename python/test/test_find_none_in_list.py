import unittest

from typing import Tuple

from find_none_in_list import ItemList, find_none

test_values: Tuple[Tuple[ItemList, int]] = (
    ([1, 2, None, 3], 2),
    ([1, 2, 3, None, 3, 4, 5, 3], 3),
    ([1, 2, 3, 4, 5], -1),
    ([None, 2, 3, 4], 0),
    ([1, 2, 3], -1)
)


class FindNoneInListTestCase(unittest.TestCase):
    def test_find_index_of_None_in_list(self):
        for lst, expected_index in test_values:
            with self.subTest():
                self.assertEqual(find_none(lst), expected_index)


if __name__ == '__main__':
    unittest.main()
