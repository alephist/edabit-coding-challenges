import unittest

from typing import List, Tuple

from product_divisible_by_sum import divisible

test_values: Tuple[Tuple[List[int], bool]] = (
    ([3, 2, 4, 1], False),
    ([4, 4, 4, 4], True),
    ([4, 2, 6], True),
    ([1, 1, 1, 1, 10], False),
    ([10, 5, 10], True),
    ([3, 5, 1], False)
)


class ProductDivisibleBySumTestCase(unittest.TestCase):
    def test_check_if_product_of_list_is_divisible_to_the_sum_of_same_list(self):
        for lst, expected_value in test_values:
            with self.subTest():
                self.assertEqual(divisible(lst), expected_value)


if __name__ == '__main__':
    unittest.main()
