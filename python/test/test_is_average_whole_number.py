import unittest

from typing import List, Tuple

from is_average_whole_number import is_avg_whole

test_values: Tuple[Tuple[List[int], bool]] = (
    ([3, 5, 9], False),
    ([1, 1, 1, 1], True),
    ([1, 2, 3, 4, 5], True),
    ([5, 2, 4], False),
    ([11, 22], False),
    ([4, 1, 7, 9, 2, 5, 7, 2, 4], False)
)


class IsAverageWholeNumberTestCase(unittest.TestCase):
    def test_check_if_average_of_numbers_is_whole_number(self):
        for lst, expected_value in test_values:
            with self.subTest():
                self.assertEqual(is_avg_whole(lst), expected_value)


if __name__ == '__main__':
    unittest.main()
