import unittest

from typing import Tuple

from integer_in_range import int_within_bounds

test_values: Tuple[Tuple[int, int, int, bool]] = (
    (3, 1, 9, True),
    (6, 1, 6, False),
    (4.5, 3, 8, False),
    (-5, -10, 6, True),
    (4, 0, 0, False),
    (10, 9, 11, True),
    (6.3, 2, 6, False),
    (6.3, 2, 10, False),
    (9, 2, 3, False),
    (9, 9, 9, False),
    (-3, -5, -2, True),
    (-3, -5, -3, False),
    (-3, -10, 10, True),
    (0, -3, 3, True),
    (0, 0, 1, True),
    (7, 7, 12, True)
)


class IntegerInRangeTestCase(unittest.TestCase):
    def test_check_if_n_is_within_lower_and_upper_bounds(self):
        for n, lower, upper, expected in test_values:
            with self.subTest():
                self.assertEqual(int_within_bounds(n, lower, upper), expected)


if __name__ == '__main__':
    unittest.main()
