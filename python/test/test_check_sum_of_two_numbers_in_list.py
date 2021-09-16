import unittest

from typing import List, Tuple

from sum_of_two_numbers_in_list import check_sum

test_values: Tuple[Tuple[List[int], int, bool]] = (
    ([10, 15, 3, 7], 17, True),
    ([4, 5, 6, 7, 8, 9], 13, True),
    ([2, 8, 9, 12, 45, 78], 1, False),
    ([10, 12, 4, 7, 9, 11], 16, True),
    ([0, 98, 76, 23], 174, True),
    ([0, 9, 7, 23, 19, 18, 17, 66], 39, False)
)


class SumOfTwoNumbersInListTestCase(unittest.TestCase):
    def test_check_if_sum_of_any_two_numbers_in_list_is_equal_to_n(self):
        for lst, n, expected_value in test_values:
            with self.subTest():
                self.assertEqual(check_sum(lst, n), expected_value)


if __name__ == '__main__':
    unittest.main()
