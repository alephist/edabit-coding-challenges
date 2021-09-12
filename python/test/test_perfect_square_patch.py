import unittest

from typing import List, Tuple

from perfect_square_patch import square_patch

test_values: Tuple[Tuple[int, List[List[int]]]] = (
    (3, [
        [3, 3, 3],
        [3, 3, 3],
        [3, 3, 3]
    ]),
    (2, [
        [2, 2],
        [2, 2]
    ]),
    (4, [
        [4, 4, 4, 4],
        [4, 4, 4, 4],
        [4, 4, 4, 4],
        [4, 4, 4, 4]
    ]),
    (6, [
        [6, 6, 6, 6, 6, 6],
        [6, 6, 6, 6, 6, 6],
        [6, 6, 6, 6, 6, 6],
        [6, 6, 6, 6, 6, 6],
        [6, 6, 6, 6, 6, 6],
        [6, 6, 6, 6, 6, 6]
    ]),
    (5, [
        [5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5],
        [5, 5, 5, 5, 5]
    ]),
    (1, [[1]]),
    (0, [])
)


class PerfectSquarePatchTestCase(unittest.TestCase):
    def test_return_n_by_n_matrix_containing_integer_n(self):
        for n, expected_matrix in test_values:
            with self.subTest():
                self.assertEqual(square_patch(n), expected_matrix)


if __name__ == '__main__':
    unittest.main()
