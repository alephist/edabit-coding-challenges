import unittest

from typing import List, Tuple, Union

from return_duplicate_numbers import duplicate_nums

test_values: Tuple[Tuple[List[int], Union[List[int], None]]] = (
    ([1, 2, 3, 4, 3, 5, 6], [3]),
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], None),
    ([20, 30, 40, 30, 20, 40], [20, 30, 40]),
    ([100, 59, 12, 13, 54, 76, 100, 14, 12], [12, 100]),
    ([81, 72, 43, 72, 81, 99, 99, 100, 12, 54], [72, 81, 99]),
    ([11, 22, 33, 44, 55, 44, 33, 22, 11], [11, 22, 33, 44])
)


class ReturnDuplicateNumbersTestCase(unittest.TestCase):
    def test_return_list_of_duplicate_numbers(self):
        for nums, expected_value in test_values:
            with self.subTest():
                self.assertEqual(duplicate_nums(nums), expected_value)


if __name__ == '__main__':
    unittest.main()
