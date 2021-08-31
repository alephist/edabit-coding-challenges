import unittest

from typing import List, Tuple

from sum_of_numbers_in_list import list_sum

test_values: Tuple[Tuple[List[int], float]] = (
    ([1, 3, 3, 1, 10], 105.46),
    ([0, 3, 3, 1, 10], 104.46),
    ([1, 31, 3, 11, 0], 11.62),
    ([1, 2, 3, 4, 5, 6, 8], 124.97),
    ([2, 3, 4, 5], 23.97),
    ([2, 4, 6, 8, 9, 11], 126.32),
    ([6, 5, 7, 2, 1], 45.88),
    ([2, 2, 2, 2], 16),
    ([5, 1, 2, 3, 4, 6, 7, 8, 4], 143.61),
    ([2, 4, 3, 2, 3, 4, 4, 5], 61.7),
    ([1, 14, 9, 8, 17, 21], 272.71),
    ([7, 23, 22, 6, 8, 2], 595.44),
    ([33, 2, 1, 5, 0, 5], 15.22),
    ([5, 6, 7, 3, 22, 2], 530.61),
    ([3, 4, 5, 6, 7, 8], 122.61),
    ([1, 4, 5, 6, 7, 2, 3], 63.61),
    ([2, 7, 0, 3, 4, 8, 3], 90.11),
    ([9, 3, 0, 2, 7, 8], 75.38),
    ([7, 7, 7, 7, 1], 11.58),
    ([6, 7, 8, 9, 10, 3, 4], 223.38),
    ([4, 5, 7, 8, 1, 2, 3, 0], 91.61),
    ([9, 8, 7, 6, 5, 4, 3, 2], 129.61)
)


class SumOfNumbersInListTestCase(unittest.TestCase):
    def test_get_sum_of_numbers_from_list(self):
        for lst, expected_sum in test_values:
            with self.subTest():
                self.assertEqual(list_sum(lst), expected_sum)


if __name__ == '__main__':
    unittest.main()
