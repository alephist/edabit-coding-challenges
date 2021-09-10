import unittest

from typing import List, Tuple

from cumulative_list_sum import cumulative_sum

test_values: Tuple[Tuple[List[int], List[int]]] = (
    ([], []),
    ([1], [1]),
    ([1, 2, 3], [1, 3, 6]),
    ([-1, -2, -3], [-1, -3, -6]),
    ([1, -2, 3], [1, -1, 2]),
    ([3, 3, -2, 408, 3, 3, 0, 66, 2, -2, 2, 3, 4, 2, -47, 3, 3, 2], [3, 6, 4,
     412, 415, 418, 418, 484, 486, 484, 486, 489, 493, 495, 448, 451, 454, 456]),
)


class CumulativeListSumTestCase(unittest.TestCase):
    def test_return_list_of_cumulative_sum(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(cumulative_sum(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
