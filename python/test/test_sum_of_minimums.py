import unittest

from typing import List, Tuple

from sum_of_minimums import sum_minimums

test_values: Tuple[Tuple[List[List[int]], int]] = (
    ([[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]], 26),
    ([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]], 9),
    ([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]], 76),
)


class SumOfMinimumsTestCase(unittest.TestCase):
    def test_get_sum_of_the_minimum_value_of_each_row(self):
        for lst, expected_sum in test_values:
            with self.subTest():
                self.assertEqual(sum_minimums(lst), expected_sum)


if __name__ == '__main__':
    unittest.main()
