import unittest

from typing import List, Tuple

from index_multiplier import index_multiplier

test_values: Tuple[Tuple[List[int], int]] = (
    ([9, 3, 7, -7], -4),
    ([3, 8, 6, -4], 8),
    ([10, -9, -2, 0, 2], -5),
    ([4, 4, 2, 2, -4], -2),
    ([9, 4, 7, 5, -1, -3], 14),
    ([-9, 5, 9, 5, -7, 7], 45),
    ([-1, -2, 8, -5], -1),
    ([7, 10, -5, -4, 6, 2], 22),
    ([0, 1, 0, 1, 0, 1, 0, 1], 16),
    ([-2, 5, -7, -23, 0, 14], -8),
    ([53, -43, 39, -2, -11, 3], 0),
    ([40, 32, -18, 48, -15], 80),
    ([1, -20, -11, 4, -12, 38, -30, 34], 170),
    ([-21, 30, 20, 6, -16], 24),
    ([8, -24, -8, -23, 20, 32, -29, -20], -183),
    ([], 0)
)


class IndexMultiplierTestCase(unittest.TestCase):
    def test_get_sum_of_each_number_in_list_multiplied_by_its_index(self):
        for lst, expected_sum in test_values:
            with self.subTest():
                self.assertEqual(index_multiplier(lst), expected_sum)


if __name__ == '__main__':
    unittest.main()
