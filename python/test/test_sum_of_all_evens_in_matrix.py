import unittest

from typing import Tuple

from sum_of_all_evens_in_matrix import Matrix, sum_of_evens

test_values: Tuple[Tuple[Matrix, int]] = (
    ([
        [1, 5, 1, 3],
        [4, 1, 2, 0],
        [6, 9, 7, 4],
        [5, 1, 2, 6]
    ], 24),
    ([
        [1, 0, 1],
        [33, 1, 2],
        [15, 9, 1],
        [5, 1, 979]
    ], 2),
    ([
        [2, 19, 5, 43],
        [67, 2, 0, 12]
    ], 16),
    ([
        [1, 3, 7, 9],
        [11, 13, 15, 17],
        [19, 21, 23, 25]
    ], 0),
    ([
        [],
        [],
        []
    ], 0)
)


class SumOfAllEvenInMatrixTestCase(unittest.TestCase):
    def test_get_sum_of_even_numbers_from_matrix(self):
        for lst, expected_sum in test_values:
            with self.subTest():
                self.assertEqual(sum_of_evens(lst), expected_sum)


if __name__ == '__main__':
    unittest.main()
