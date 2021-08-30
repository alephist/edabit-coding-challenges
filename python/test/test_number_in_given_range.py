import unittest

from typing import Dict, Tuple

from number_in_given_range import is_in_range

test_values: Tuple[Tuple[int, Dict[str, int], bool]] = (
    (4, {"min": 0, "max": 5}, True),
    (4, {"min": 4, "max": 5}, True),
    (4, {"min": 0, "max": 4}, True),
    (4, {"min": 6, "max": 10}, False),
    (11, {"min": 6, "max": 10}, False),
    (5, {"min": 5, "max": 5}, True),
    (1.5, {"min": 1.25, "max": 1.75}, True),
    (1.1, {"min": 1.25, "max": 1.75}, False),
    (1.8, {"min": 1.25, "max": 1.75}, False),
    (-1, {"min": -1, "max": 1}, True)
)


class NumberInGivenRangeTestCase(unittest.TestCase):
    def test_check_if_number_is_within_given_range(self):
        for n, r, expected in test_values:
            with self.subTest():
                self.assertEqual(is_in_range(n, r), expected)


if __name__ == '__main__':
    unittest.main()
