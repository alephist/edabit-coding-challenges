import unittest

from typing import List, Tuple

from check_factors import check_factors

test_values: Tuple[Tuple[List[int], int, bool]] = (
    ([2, 3, 4], 12, True),
    ([1, 2, 3, 8], 12, False),
    ([1, 2, 50], 100, True),
    ([1, 9, 81], 81, True),
    ([5, 10, 50], 500, True),
    ([5, 10, 499], 500, False),
    ([3, 6], 9, False)
)


class CheckFactorsTestCase(unittest.TestCase):
    def test_check_if_all_numbers_in_list_are_factor_of_num(self):
        for factors, num, expected_value in test_values:
            with self.subTest():
                self.assertEqual(check_factors(factors, num), expected_value)


if __name__ == '__main__':
    unittest.main()
