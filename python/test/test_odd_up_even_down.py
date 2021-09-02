import unittest

from typing import List, Tuple

from odd_up_even_down import transform

test_values: Tuple[Tuple[List[int], List[int]]] = (
    ([1, 2, 3, 4, 5], [2, 1, 4, 3, 6]),
    ([3, 3, 4, 3], [4, 4, 3, 4]),
    ([2, 2, 0, 8, 10], [1, 1, -1, 7, 9]),
    ([9, 13, 15, 5, 2, 11], [10, 14, 16, 6, 1, 12])
)


class OddUpEvenDownTestCase(unittest.TestCase):
    def test_decrement_by_one_even_numbers_and_increment_by_one_odd_numbers_from_list(self):
        for lst, expected_lst in test_values:
            with self.subTest():
                self.assertEqual(transform(lst), expected_lst)


if __name__ == '__main__':
    unittest.main()
