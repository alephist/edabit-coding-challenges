import unittest

from typing import List, Tuple

from unique_positive_numbers import unique_lst

test_values: Tuple[Tuple[List[int], List[int]]] = (
    ([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1], [1, 3]),
    ([3, -3, -3, 5, 5, -6, -2, -4, -1, 3], [3, 5]),
    ([-5, 3, 2, -4, 3, -1, -7, 2, 4, 4], [3, 2, 4]),
    ([3, -5, 0, -5, 2, -1, 0, -4, -6, 1], [3, 2, 1]),
    ([10, 6, -12, 13, 5, 5, 13, 6, 5], [10, 6, 13, 5]),
    ([5, 10, -12, 5, 9, 5, 10, 9, 10, -12], [5, 10, 9]),
    ([], [])
)


class UniquePositiveNumbersTestCase(unittest.TestCase):
    def test_return_list_of_unique_positive_numbers(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(unique_lst(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
