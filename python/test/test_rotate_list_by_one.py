import unittest

from typing import Tuple

from rotate_list_by_one import IntList, rotate_by_one

test_values: Tuple[Tuple[IntList, IntList]] = (
    ([1, 2, 3, 4, 5], [5, 1, 2, 3, 4]),
    ([6, 5, 8, 9, 7], [7, 6, 5, 8, 9]),
    ([20, 15, 26, 8, 4], [4, 20, 15, 26, 8]),
    ([7, 8, 6, 4, 5], [5, 7, 8, 6, 4]),
    ([5, 9, 45, 1, 2], [2, 5, 9, 45, 1])
)


class RotateListByOneTestCase(unittest.TestCase):
    def test_move_last_item_of_the_list_to_index_zero(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(rotate_by_one(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
