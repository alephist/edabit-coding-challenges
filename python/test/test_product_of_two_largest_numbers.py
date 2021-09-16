import unittest

from typing import List, Tuple

from product_of_two_largest_numbers import product

test_value: Tuple[Tuple[List[int], int]] = (
    ([2, 3, 1, -1, 2], 6),
    ([-2, -2, -1, -1], 2),
    ([8, 8, 8], 64),
    ([-2, -1, 100, -12, 0], 0),
    ([1, 2, 3, 4], 12),
    ([-12, 5, 5, 8, 8, 8], 40),
    ([2, 8, 8, 8], 16)
)


class ProductOfTwoLargestNumbersTestCase(unittest.TestCase):
    def test_get_product_of_two_largest_numbers(self):
        for lst, expected_value in test_value:
            with self.subTest():
                self.assertEqual(product(lst), expected_value)


if __name__ == '__main__':
    unittest.main()
