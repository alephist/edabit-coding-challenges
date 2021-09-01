import unittest

from typing import Tuple

from narcissistic_number import is_narcissistic

test_values: Tuple[Tuple[int, bool]] = (
    (1, True),
    (5, True),
    (7, True),
    (153, True),
    (370, True),
    (371, True),
    (1634, True),
    (9004, False),
    (2546, False),
    (2124, False),
    (8345, False),
)


class NarcissisticNumberTestCase(unittest.TestCase):
    def test_check_if_number_is_a_narcissistic_number(self):
        for n, expected_value in test_values:
            with self.subTest():
                self.assertEqual(is_narcissistic(n), expected_value)


if __name__ == '__main__':
    unittest.main()
