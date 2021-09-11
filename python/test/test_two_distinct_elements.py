import unittest

from typing import List, Tuple

from two_distinct_elements import return_unique

test_values: Tuple[Tuple[List[int], List[int]]] = (
    ([1, 9, 8, 8, 7, 6, 1, 6], [9, 7]),
    ([5, 5, 2, 4, 4, 4, 9, 9, 9, 1], [2, 1]),
    ([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8], [5, 6]),
    ([4, 3, 9, 9, 1, 1, 6, 1, 6, 2, 4], [3, 2]),
    ([44, 44, 44, 2, 55, 55, 55, 0, 66, 66, 66], [2, 0]),
    ([-9, -9, -9, 7, -9, -9, 1], [7, 1]),
    ([2, 2, -19, 2, 7, 7, 4, 9, 9, 0, 0, 3, 3, 3], [-19, 4])
)


class TwoDistinctElementsTestCase(unittest.TestCase):
    def test_return_two_unique_numbers(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(return_unique(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
